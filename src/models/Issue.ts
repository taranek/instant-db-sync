import { decorateInstance, Model } from "./Model";
import { Issues as IssueNode } from "@taranek/gql-client";
import { sdkClient } from "../gql/apolloClient";
import { observed, unique } from "../decorators/unique";
import { WithPoolStore } from "../stores/ObjectPoolStore";
import { createModelUpdater } from "./base";
export class Issue extends Model {
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
    super();
    this.id = id;
    this.created_at = created_at;
    this.description = description;
    this.title = title;
    this.priority = priority;
    const decorated = decorateInstance(
      this,
      createModelUpdater(sdkClient.updateIssuesCollection),
      objectPoolStore
    );
    objectPoolStore.registerProperty(id, decorated);
    return decorated;
  }
}
