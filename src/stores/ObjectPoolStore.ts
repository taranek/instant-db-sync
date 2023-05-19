import {
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { apolloClient, sdkClient } from "../gql/apolloClient";
import { Issue } from "../models/Issue";
import { Model } from "../models/Model";

export type WithPoolStore<T> = T & {
  objectPoolStore: ObjectPoolStore;
};
export function update<T extends Model>(
  entity: T,
  updater: (oldEntityValue: T) => T
) {
  runInAction(() => {
    const poolEntity = window._pool[entity.id];
    window._pool[entity.id] = updater(poolEntity);
  });

  return;
}
export class ObjectPoolStore {
  constructor() {
    makeAutoObservable(this);
  }

  registerProperty(id: string, value: unknown) {
    this[id] = value;
    makeObservable(this, {
      [id as keyof ObjectPoolStore]: observable,
    });
    window._pool[id] = this[id];
  }
}
