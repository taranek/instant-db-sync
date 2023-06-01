import { makeAutoObservable, observable } from "mobx";
import { sdkClient } from "../gql/client";
import { ObjectPoolStore } from "./ObjectPoolStore";
import { User } from "../models/User";

export class UsersStore {
  @observable
  users: User[] = [];
  @observable
  objectPoolStore: ObjectPoolStore;
  constructor(objectPoolStore: ObjectPoolStore) {
    makeAutoObservable(this);
    this.objectPoolStore = objectPoolStore;
  }

  async fetchUsers() {
    const { usersCollection } = await sdkClient.usersCollection({});
    this.users = (usersCollection?.edges ?? []).map(
      (userData) =>
        new User({
          ...userData.node,
          objectPoolStore: this.objectPoolStore,
        })
    );
  }
}
