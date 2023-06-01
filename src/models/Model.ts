import { getEntityIdentifier } from "./base";
import { PropertyUpdater } from "../decorators";
import { cloneDeep } from "lodash-es";
import { ObjectPoolStore } from "../stores/ObjectPoolStore";
import { __UNIQUE_KEY__SYMBOL__ } from "../decorators/unique";

export class Model {
  protected [__UNIQUE_KEY__SYMBOL__]: string | null;
  constructor() {
    this[__UNIQUE_KEY__SYMBOL__] = null;
  }
  getUniquePropertyKey() {
    return this[__UNIQUE_KEY__SYMBOL__];
  }
  setUniquePropertyKey(key: string) {
    this[__UNIQUE_KEY__SYMBOL__] = key;
  }
}

export const updaterHandlerProxy = <T extends Model>(
  updaterFn: PropertyUpdater<any>,
  pool: ObjectPoolStore
) => ({
  //@ts-ignore
  set(obj, prop: string, value: unknown) {
    console.log(`Property ${prop} changed from: ${obj[prop]} to ${value}`);
    updaterFn(obj, prop, value);
    const reflected = Reflect.set(obj, prop, value);
    const uniqueProperty = getEntityIdentifier(obj);
    const objectIdentifier = obj[uniqueProperty];
    pool[objectIdentifier as keyof ObjectPoolStore] = cloneDeep(obj);
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
