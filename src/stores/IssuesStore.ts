import { computed, makeAutoObservable, observable } from "mobx";
import { apolloClient, sdkClient } from "../gql/apolloClient";
import { Issue } from "../models/Issue";
import { ObjectPoolStore } from "./ObjectPoolStore";

export class IssuesStore {
  @observable
  issues: Issue[] = [];
  @observable
  counter = 0;
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
  increaseCounter() {
    this.counter = this.counter + 1;
  }
}
