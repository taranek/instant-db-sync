import { decorateInstance, Model } from "./Model";
import { Users as UserNode } from "@taranek/gql-client";
import { PropertyUpdater } from "../decorators";
import { sdkClient } from "../gql/apolloClient";
import { observed, unique } from "../decorators/unique";
import { WithPoolStore } from "../stores/ObjectPoolStore";
import { makeAutoObservable } from "mobx";

const userUpdater: PropertyUpdater<User> = (user, property, newValue) => {
  console.log("filter user", user);
  //console.log("instance keys", Object.keys(user));
  sdkClient.updateUsersCollection({
    filter: {
      id: {
        eq: user.id,
      },
    },
    set: {
      [property]: newValue,
    },
    atMost: 1,
  });
};
export class User {
  created_at?: string | null;
  @observed
  first_name?: string | null;
  @observed
  last_name?: string | null;
  @unique
  id: string;

  constructor({
    id,
    created_at,
    first_name,
    last_name,
    objectPoolStore,
  }: WithPoolStore<User>) {
    this.id = id;
    this.created_at = created_at;
    this.first_name = first_name;
    this.last_name = last_name;
    makeAutoObservable(this);
    const decorated = decorateInstance(this, userUpdater, objectPoolStore);
    objectPoolStore.registerProperty(id, decorated);
    return decorated;
  }
}
