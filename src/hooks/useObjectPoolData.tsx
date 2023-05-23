import { Model } from "../models/Model";
import { RootStore } from "../stores/RootStore";
import { useRootStore } from "./useRootStore";

type Selector<T extends Model> = (rootStore: RootStore) => T[];

export const useObjectPoolData = <T extends Model>(
  selector: Selector<T>
): typeof selector extends (...args: any[]) => infer R ? R : never => {
  const store = useRootStore();
  const { objectPoolStore } = useRootStore();
  return selector(store).map((entity) => objectPoolStore[entity.id]);
};
