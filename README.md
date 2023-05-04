# instant-db-sync

# Client code generation
1. Create columns and db schema in Supabase.
2. Fetch GraphQL schema from Supabase instance.
3. Generate `.gql` operations files (CRUD ones) for each table
4. Based on operations from the previous step, generate hooks and client that you can use in your frontend code
✨Modify every table in Supabase with no hassle! Just run `yarn codegen` to get your client SDK ready! ✨
