import { decorateInstance, Model } from "./Model";
import { Users as UserNode } from "@taranek/gql-client";
import { PropertyUpdater } from "../decorators";
import { sdkClient } from "../gql/apolloClient";
import { observed, unique, UniqueObject } from "../decorators/unique";
import { WithPoolStore } from "../stores/ObjectPoolStore";
import { makeAutoObservable, makeObservable } from "mobx";
import { createModelUpdater } from "./base";

interface WithId {
  id: "123";
}
interface WithName {
  last_name?: string | null;
}
export class User extends Model {
  created_at?: string | null;
  @observed
  first_name?: string | null;
  @observed
  last_name?: string | null;
  @observed
  avatar_url?: string | null;
  @unique
  id: string;

  constructor({
    id,
    created_at,
    first_name,
    last_name,
    avatar_url,
    objectPoolStore,
  }: WithPoolStore<User>) {
    super();
    this.id = id;
    this.created_at = created_at;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar_url = avatar_url;
    const decorated = decorateInstance(
      this,
      createModelUpdater(sdkClient.updateUsersCollection),
      objectPoolStore
    );
    objectPoolStore.registerProperty(id, decorated);
    return decorated;
  }
}
