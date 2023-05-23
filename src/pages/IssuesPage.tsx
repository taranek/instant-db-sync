import { DataTable } from "../issues/DataTable";
import { columns } from "../issues/columns";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";
import { useEffect } from "react";
import { Button } from "../components/button";
import { RootStore } from "../stores/RootStore";
import { Model } from "../models/Model";
import { Separator } from "../components/separator";
import { Users } from "../molecules/Users";
import { useObjectPoolData } from "../hooks/useObjectPoolData";

export const IssuesPage = observer(() => {
  const { issuesStore, objectPoolStore } = useRootStore();
  const issues = useObjectPoolData((r) => r.issuesStore.issues);
  const { counter } = issuesStore;
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
