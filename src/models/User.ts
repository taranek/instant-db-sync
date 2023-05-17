import { decorateInstance, Model } from "./Model";
import { Users as UserNode } from "@taranek/gql-client";
import { PropertyUpdater } from "../decorators";
import { sdkClient } from "../gql/apolloClient";
import { observed, unique } from "../decorators/unique";

const userUpdater: PropertyUpdater<User> = (user, property, newValue) => {
  console.log("filter user", user);
  console.log("instance keys", Object.keys(user));
  sdkClient.updateUsersCollection({
    filter: {
      id: {
        eq: user.id,
      },
    },
    set: {
      [property]: newValue,
    },
    atMost: 1,
  });
};
export class User extends Model {
  created_at?: string | null;
  @observed
  first_name?: string | null;
  @observed
  last_name?: string | null;
  @unique
  id: string;

  constructor({ id, created_at, first_name, last_name }: UserNode) {
    super();
    this.id = id;
    this.created_at = created_at;
    this.first_name = first_name;
    this.last_name = last_name;
    window._pool[id] = this;
    return decorateInstance(this, userUpdater);
  }
}
function validate<T>(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<T>
) {
  let set = descriptor.set!;
  console.log("sett");

  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);

    if (!(value instanceof type)) {
      throw new TypeError(
        `Invalid type, got ${typeof value} not ${type.name}.`
      );
    }

    set.call(this, value);
  };
}
