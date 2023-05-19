import { decorateInstance, Model } from "./Model";
import { Issues as IssueNode } from "@taranek/gql-client";
import { PropertyUpdater } from "../decorators";
import { sdkClient } from "../gql/apolloClient";
import { observed, unique } from "../decorators/unique";
import { makeAutoObservable } from "mobx";
import { ObjectPoolStore, WithPoolStore } from "../stores/ObjectPoolStore";

const issueUpdater: PropertyUpdater<Issue> = (issue, property, newValue) => {
  console.log("filter issue", issue);
  //console.log("instance keys", Object.keys(issue));
  sdkClient.updateIssuesCollection({
    filter: {
      id: {
        eq: issue.id,
      },
    },
    set: {
      [property]: newValue,
    },
    atMost: 1,
  });

};

export class Issue {
  created_at?: IssueNode["created_at"];
  @observed
  title?: IssueNode["title"];
  @observed
  description?: IssueNode["description"];
  @observed
  priority?: IssueNode["priority"];
  @unique
  id: IssueNode["id"];

  constructor({
    id,
    created_at,
    description,
    title,
    priority,
    objectPoolStore,
  }: WithPoolStore<IssueNode>) {
    this.id = id;
    this.created_at = created_at;
    this.description = description;
    this.title = title;
    this.priority = priority;
    makeAutoObservable(this)
    const decorated = decorateInstance(this, issueUpdater, objectPoolStore);
    objectPoolStore.registerProperty(id, decorated)
    return decorated;
  }
}
