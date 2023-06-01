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
    // TODO: nasty type casting
    const entityIdentifier = entity[
      entityIdentifierKey as keyof typeof entity
    ] as keyof typeof window._pool;
    const poolEntity = window._pool[entityIdentifier];
    window._pool[entityIdentifier] = updater(poolEntity as T);
  });

  return;
}

export class ObjectPoolStore {
  constructor() {
    window._pool = {};
    makeAutoObservable(this);
  }

  // TODO: fix any and type casting
  registerProperty(id: string, value: any) {
    this[id as keyof ObjectPoolStore] = value;
    makeObservable(this, {
      [id as keyof ObjectPoolStore]: observable,
    });
    window._pool[id] = this[id as keyof ObjectPoolStore];
  }
}
