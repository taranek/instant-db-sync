import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getSdk } from "@taranek/gql-client";
import { GraphQLClient } from "graphql-request";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:8080/graphql/v1`,
});
export const sdkClient = getSdk(
  new GraphQLClient(`http://localhost:8080/graphql/v1`, {})
);
