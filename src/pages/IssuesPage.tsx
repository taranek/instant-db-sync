import { DataTable } from "../issues/DataTable";
import { columns } from "../issues/columns";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";
import { useEffect } from "react";
import { Button } from "../components/button";
import { RootStore } from "../stores/RootStore";
import { Model } from "../models/Model";

type Selector<T extends Model> = (rootStore: RootStore) => T[];
const useObjectPoolData = (selector: Selector<unknown>) => {
  const store = useRootStore();
  const { objectPoolStore } = useRootStore();
  return selector(store).map((entity) => objectPoolStore[entity.id]);
};
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
      {issues ? <DataTable columns={columns} data={issues} /> : null}
    </div>
  );
});
