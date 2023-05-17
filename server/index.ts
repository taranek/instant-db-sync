import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

const supabaseServerUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";
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
