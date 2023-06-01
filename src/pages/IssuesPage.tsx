import { DataTable } from "../issues/DataTable";
import { columns } from "../issues/columns";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";
import { useEffect } from "react";
import { Separator } from "../components/separator";
import { Users } from "../molecules/Users";
import { useObjectPoolCollection } from "../hooks/useObjectPoolCollection";

export const IssuesPage = observer(() => {
  const { issuesStore } = useRootStore();
  const issues = useObjectPoolCollection((r) => r.issuesStore.issues);
  console.log("[RENDERING] issues => ", issues);
  useEffect(() => {
    issuesStore.fetchIssues();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <h1>Instant database sync</h1>
      <h2>Users</h2>
      <Users />
      <Separator />
      <h2>Issues</h2>
      {issues ? <DataTable columns={columns} data={issues} /> : null}
    </div>
  );
});
