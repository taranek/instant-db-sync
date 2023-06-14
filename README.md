# instant-db-sync


## Live demo 
Please note that it is still in WIP stage (you may find a lot of unused and cluttered code):

https://instant-db-sync-client.onrender.com/


# Client code generation

How it works:
1. Create columns and db schema in Supabase.
2. Fetch GraphQL schema from Supabase instance.
3. Generate `.gql` operations files (CRUD ones) for each table
4. Based on operations from the previous step, generate hooks and client that you can use in your frontend code

That's it!

✨Modify every table in Supabase with no hassle! Just run `yarn codegen` to get your client SDK ready! ✨


# Client side update
Get your data in your react component:
```typescript
  const users = useObjectPoolCollection((rootStore) => rootStore.usersStore.users);
```
If you want to update a DB entity, just mutate it in `update` function:
```typescript
    <button
        onClick={() => {
          update(users[0], (user) => {
            user.last_name = new Date().getMilliseconds().toString();
            return user;
          });
        }}
      >
        mutate first user
      </button>
```
An appriopriate gql request shall be triggered to the server over http (websockets communication coming soon).


# Things that need to be done
- real time update using gql subscriptions or supabase subscription
- code cleanup
- refactor decorators.

