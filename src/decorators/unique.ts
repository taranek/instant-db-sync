import { Model } from "../models/Model";

type UniqueKeyName = string;

export interface UniqueObject {
  [__UNIQUE_KEY__SYMBOL__]: UniqueKeyName | null;
}

export const __UNIQUE_KEY__SYMBOL__ = Symbol("__UNIQUE_KEY__SYMBOL__");
export const getUniquePropertyName = (entity: UniqueObject) => {
  return entity[__UNIQUE_KEY__SYMBOL__];
};

export const unique = (target: Model, propertyKey: UniqueKeyName) => {
  const prototype = Object.getPrototypeOf(target);
  console.log("unique", prototype);
  target.setUniquePropertyKey(propertyKey);
};

export const observed = (target: any, propertyKey: string) => {
  target[propertyKey] = true;
};
