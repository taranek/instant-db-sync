import { makeAutoObservable, observable } from "mobx";
import { sdkClient } from "../gql/client";
import { Issue } from "../models/Issue";
import { ObjectPoolStore } from "./ObjectPoolStore";

export class IssuesStore {
  @observable
  issues: Issue[] = [];
  objectPoolStore: ObjectPoolStore;
  constructor(objectPoolStore: ObjectPoolStore) {
    makeAutoObservable(this);
    this.objectPoolStore = objectPoolStore;
  }

  async fetchIssues() {
    const { issuesCollection } = await sdkClient.issuesCollection({});
    this.issues = (issuesCollection?.edges ?? []).map(
      (issueData) =>
        new Issue({
          ...issueData.node,
          objectPoolStore: this.objectPoolStore,
        })
    );
  }
}
