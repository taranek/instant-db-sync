import {
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { Model } from "../models/Model";
import { getEntityIdentifier } from "../models/base";

export type WithPoolStore<T> = T & {
  objectPoolStore: ObjectPoolStore;
};
export function update<T extends Model>(
  entity: T,
  updater: (oldEntityValue: T) => T
) {
  runInAction(() => {
    const entityIdentifierKey = getEntityIdentifier(entity);
    const entityIdentifier = entity[entityIdentifierKey];
    const poolEntity = window._pool[entityIdentifier];
    window._pool[entityIdentifier] = updater(poolEntity as T);
  });

  return;
}

export class ObjectPoolStore {
  constructor() {
    makeAutoObservable(this);
  }

  registerProperty(id: string, value: unknown) {
    this[id as keyof ObjectPoolStore] = value;
    makeObservable(this, {
      [id as keyof ObjectPoolStore]: observable,
    });
    window._pool[id] = this[id];
  }
}
