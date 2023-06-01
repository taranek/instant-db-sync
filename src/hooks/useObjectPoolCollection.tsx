import { Model } from "../models/Model";
import { RootStore } from "../stores/RootStore";
import { useRootStore } from "./useRootStore";
import { getEntityIdentifier } from "../models/base";

type Selector<T extends Model> = (rootStore: RootStore) => T[];

export const useObjectPoolCollection = <T extends Model>(
  selector: Selector<T>
): typeof selector extends (...args: any[]) => infer R ? R : never => {
  const store = useRootStore();
  const { objectPoolStore } = useRootStore();
  return selector(store).map((entity) => {
    const identifier = getEntityIdentifier<T>(entity);
    // @ts-expect-error TODO: fix typings
    return objectPoolStore[entity[identifier]];
  });
};
