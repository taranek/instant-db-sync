import { makeAutoObservable } from "mobx";
import { IssuesStore } from "./IssuesStore";
import { ObjectPoolStore } from "./ObjectPoolStore";

export class RootStore {
  issuesStore: IssuesStore;
  objectPoolStore: ObjectPoolStore;
  constructor() {
    this.objectPoolStore = new ObjectPoolStore();
    this.issuesStore = new IssuesStore(this.objectPoolStore);
    makeAutoObservable(this);
  }
}
