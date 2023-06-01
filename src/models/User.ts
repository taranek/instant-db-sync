import { decorateInstance, Model } from "./Model";
import { sdkClient } from "../gql/client";
import { observed, unique } from "../decorators";
import { WithPoolStore } from "../stores/ObjectPoolStore";
import { createModelUpdater } from "./base";

type ConstructorParams = WithPoolStore<
  Pick<User, "created_at" | "first_name" | "last_name" | "avatar_url" | "id">
>;
export class User extends Model {
  created_at?: string | null;
  @observed
  first_name?: string | null;
  @observed
  last_name?: string | null;
  @observed
  avatar_url?: string | null;
  @unique
  id: string;

  constructor({
    id,
    created_at,
    first_name,
    last_name,
    avatar_url,
    objectPoolStore,
  }: ConstructorParams) {
    super();
    this.id = id;
    this.created_at = created_at;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar_url = avatar_url;
    const decorated = decorateInstance(
      this,
      createModelUpdater(sdkClient.updateUsersCollection),
      objectPoolStore
    );
    objectPoolStore.registerProperty(id, decorated);
    return decorated;
  }
}
