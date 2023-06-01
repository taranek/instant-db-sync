import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getSdk } from "@taranek/gql-client";
import { GraphQLClient } from "graphql-request";

const serverUrl = import.meta.env.VITE_PROXY_SERVER_URL || '';
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${serverUrl}/graphql/v1`,
});
export const sdkClient = getSdk(
  new GraphQLClient(`${serverUrl}/graphql/v1`, {})
);
