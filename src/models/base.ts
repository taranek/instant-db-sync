import { Model } from "./Model";
import { PropertyUpdater } from "../decorators";
import { sdkClient } from "../gql/apolloClient";
import { User } from "./User";
import { throwServerError } from "@apollo/client";

export type EntityId = string;

type UpdateQuery =
  | typeof sdkClient.updateIssuesCollection
  | typeof sdkClient.updateUsersCollection;

export const getEntityIdentifier = (entity: Model): string => {
  const prototype: Model = Object.getPrototypeOf(entity);
  if (!prototype) {
    console.error("Could not resolve prototype for", entity);
  }
  const uniqueProperty = prototype?.getUniquePropertyKey();
  if (!uniqueProperty) {
    throw new Error("Could not resolve an identifier", {
      cause: `${entity} has no identifier`,
    });
  }
  return uniqueProperty;
};
export const createModelUpdater =
  <T extends Model>(updateQuery: UpdateQuery): PropertyUpdater<T> =>
  (entity, property, newValue) => {
    const uniqueProperty = getEntityIdentifier(entity);
    updateQuery({
      filter: {
        [uniqueProperty!]: {
          eq: entity[uniqueProperty as keyof T],
        },
      },
      set: {
        [property]: newValue,
      },
      atMost: 1,
    });
  };
