import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";

import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

// Create a single supabase client for interacting with your database

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

const supabaseServerUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseServerUrl, supabaseAnonKey);

supabase.channel("subscription").on(
  "postgres_changes",
  {
    event: "*",
    schema: "public",
    table: "Issues",
  },
  (payload) => {
    console.log("Changes!", payload);
  }
);
console.log(
  "Supabase running on topics",
  supabase.getChannels().map((c) => c.topic)
);
app.use(cors());
app.use(
  "/",
  proxy(supabaseServerUrl, {
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
      proxyReqOpts.headers = { apiKey: supabaseAnonKey };
      return proxyReqOpts;
    },
  })
);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
