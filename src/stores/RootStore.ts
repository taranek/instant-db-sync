import { makeAutoObservable } from "mobx";
import { IssuesStore } from "./IssuesStore";
import { ObjectPoolStore } from "./ObjectPoolStore";
import { UsersStore } from "./UsersStores";

export class RootStore {
  issuesStore: IssuesStore;
  usersStore: UsersStore;
  objectPoolStore: ObjectPoolStore;
  constructor() {
    this.objectPoolStore = new ObjectPoolStore();
    this.issuesStore = new IssuesStore(this.objectPoolStore);
    this.usersStore = new UsersStore(this.objectPoolStore);
    makeAutoObservable(this);
  }
}
