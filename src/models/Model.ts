import { v4 as uuid } from "uuid";
import { EntityId } from "./base";
import { PropertyUpdater } from "../decorators";
import { ObjectPoolStore } from "../stores/ObjectPoolStore";
export class Model {
  id: EntityId;
  constructor() {
    this.id = uuid();
    if (!window._pool) {
      window._pool = {};
    }
    window._pool[this.id] = this;
  }
}

export type WithModelId<T> = T & {
  id?: EntityId;
};

export const updaterHandlerProxy = (
  updaterFn: PropertyUpdater<any>,
  pool: ObjectPoolStore
) => ({
  set(obj, prop, value) {
    console.log(`Property ${prop} changed from: ${obj[prop]} to ${value}`);
    updaterFn(obj, prop, value);
    const reflected = Reflect.set(obj, prop, value);
    pool[obj.id] = { ...obj };
    return reflected;
  },
});

export function decorateInstance<T>(
  target: T,
  updater: PropertyUpdater<T>,
  pool: ObjectPoolStore
) {
  console.log("creating proxy", target, Object.getPrototypeOf(target));
  return new Proxy(target, updaterHandlerProxy(updater, pool));
}
