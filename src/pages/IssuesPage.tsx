import { useIssuesCollectionQuery } from "@taranek/gql-client/src/gql/hooks";
import { apolloClient } from "../gql/apolloClient";
import { DataTable } from "../issues/DataTable";
import { columns } from "../issues/columns";

export function IssuesPage() {
  const { data } = useIssuesCollectionQuery({
    client: apolloClient,
  });
  const issues = data?.issuesCollection?.edges.map((e) => e.node) || [];
  console.log(issues);
  return (
    <div className="container mx-auto py-10">
      {data ? <DataTable columns={columns} data={issues} /> : null}
    </div>
  );
}
