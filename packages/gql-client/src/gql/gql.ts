import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A high precision floating point value represented as a string */
  BigFloat: any;
  /** An arbitrary size integer represented as a string */
  BigInt: any;
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: any;
  /** A date wihout time information */
  Date: any;
  /** A date and time */
  Datetime: any;
  /** A Javascript Object Notation value serialized as a string */
  JSON: any;
  /** Any type not handled by the type system */
  Opaque: any;
  /** A time without date information */
  Time: any;
  /** A universally unique identifier */
  UUID: any;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']>;
  gt?: InputMaybe<Scalars['BigFloat']>;
  gte?: InputMaybe<Scalars['BigFloat']>;
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']>;
  lte?: InputMaybe<Scalars['BigFloat']>;
  neq?: InputMaybe<Scalars['BigFloat']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

export type Issues = Node & {
  __typename?: 'Issues';
  created_at?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  priority?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type IssuesConnection = {
  __typename?: 'IssuesConnection';
  edges: Array<IssuesEdge>;
  pageInfo: PageInfo;
};

export type IssuesDeleteResponse = {
  __typename?: 'IssuesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Issues>;
};

export type IssuesEdge = {
  __typename?: 'IssuesEdge';
  cursor: Scalars['String'];
  node: Issues;
};

export type IssuesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  priority?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type IssuesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  priority?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IssuesInsertResponse = {
  __typename?: 'IssuesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Issues>;
};

export type IssuesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  priority?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type IssuesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  priority?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IssuesUpdateResponse = {
  __typename?: 'IssuesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Issues>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Issues` collection */
  deleteFromIssuesCollection: IssuesDeleteResponse;
  /** Deletes zero or more records from the `Users` collection */
  deleteFromUsersCollection: UsersDeleteResponse;
  /** Adds one or more `Issues` records to the collection */
  insertIntoIssuesCollection?: Maybe<IssuesInsertResponse>;
  /** Adds one or more `Users` records to the collection */
  insertIntoUsersCollection?: Maybe<UsersInsertResponse>;
  /** Updates zero or more records in the `Issues` collection */
  updateIssuesCollection: IssuesUpdateResponse;
  /** Updates zero or more records in the `Users` collection */
  updateUsersCollection: UsersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromIssuesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<IssuesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoIssuesCollectionArgs = {
  objects: Array<IssuesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUsersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateIssuesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<IssuesFilter>;
  set: IssuesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Issues` */
  issuesCollection?: Maybe<IssuesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Users` */
  usersCollection?: Maybe<UsersConnection>;
};


/** The root type for querying data */
export type QueryIssuesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<IssuesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<IssuesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  ilike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Users = Node & {
  __typename?: 'Users';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Datetime']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  last_name?: Maybe<Scalars['String']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  __typename?: 'UsersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor: Scalars['String'];
  node: Users;
};

export type UsersFilter = {
  avatar_url?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type UsersInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

export type UsersInsertResponse = {
  __typename?: 'UsersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

export type UsersUpdateResponse = {
  __typename?: 'UsersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type DeleteFromIssuesCollectionMutationVariables = Exact<{
  filter?: InputMaybe<IssuesFilter>;
  atMost: Scalars['Int'];
}>;


export type DeleteFromIssuesCollectionMutation = { __typename?: 'Mutation', deleteFromIssuesCollection: { __typename?: 'IssuesDeleteResponse', affectedCount: number, records: Array<{ __typename?: 'Issues', nodeId: string, id: any, created_at?: any | null, title?: string | null, description?: string | null, priority?: number | null }> } };

export type DeleteFromUsersCollectionMutationVariables = Exact<{
  filter?: InputMaybe<UsersFilter>;
  atMost: Scalars['Int'];
}>;


export type DeleteFromUsersCollectionMutation = { __typename?: 'Mutation', deleteFromUsersCollection: { __typename?: 'UsersDeleteResponse', affectedCount: number, records: Array<{ __typename?: 'Users', nodeId: string, id: any, created_at?: any | null, first_name?: string | null, last_name?: string | null, avatar_url?: string | null }> } };

export type InsertIntoIssuesCollectionMutationVariables = Exact<{
  objects: Array<IssuesInsertInput> | IssuesInsertInput;
}>;


export type InsertIntoIssuesCollectionMutation = { __typename?: 'Mutation', insertIntoIssuesCollection?: { __typename?: 'IssuesInsertResponse', affectedCount: number, records: Array<{ __typename?: 'Issues', nodeId: string, id: any, created_at?: any | null, title?: string | null, description?: string | null, priority?: number | null }> } | null };

export type InsertIntoUsersCollectionMutationVariables = Exact<{
  objects: Array<UsersInsertInput> | UsersInsertInput;
}>;


export type InsertIntoUsersCollectionMutation = { __typename?: 'Mutation', insertIntoUsersCollection?: { __typename?: 'UsersInsertResponse', affectedCount: number, records: Array<{ __typename?: 'Users', nodeId: string, id: any, created_at?: any | null, first_name?: string | null, last_name?: string | null, avatar_url?: string | null }> } | null };

export type UpdateIssuesCollectionMutationVariables = Exact<{
  set: IssuesUpdateInput;
  filter?: InputMaybe<IssuesFilter>;
  atMost: Scalars['Int'];
}>;


export type UpdateIssuesCollectionMutation = { __typename?: 'Mutation', updateIssuesCollection: { __typename?: 'IssuesUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'Issues', nodeId: string, id: any, created_at?: any | null, title?: string | null, description?: string | null, priority?: number | null }> } };

export type UpdateUsersCollectionMutationVariables = Exact<{
  set: UsersUpdateInput;
  filter?: InputMaybe<UsersFilter>;
  atMost: Scalars['Int'];
}>;


export type UpdateUsersCollectionMutation = { __typename?: 'Mutation', updateUsersCollection: { __typename?: 'UsersUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'Users', nodeId: string, id: any, created_at?: any | null, first_name?: string | null, last_name?: string | null, avatar_url?: string | null }> } };

export type IssuesCollectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<IssuesFilter>;
  orderBy?: InputMaybe<Array<IssuesOrderBy> | IssuesOrderBy>;
}>;


export type IssuesCollectionQuery = { __typename?: 'Query', issuesCollection?: { __typename?: 'IssuesConnection', edges: Array<{ __typename?: 'IssuesEdge', cursor: string, node: { __typename?: 'Issues', nodeId: string, id: any, created_at?: any | null, title?: string | null, description?: string | null, priority?: number | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export type NodeQueryVariables = Exact<{
  nodeId: Scalars['ID'];
}>;


export type NodeQuery = { __typename?: 'Query', node?: { __typename?: 'Issues', nodeId: string } | { __typename?: 'Users', nodeId: string } | null };

export type UsersCollectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UsersFilter>;
  orderBy?: InputMaybe<Array<UsersOrderBy> | UsersOrderBy>;
}>;


export type UsersCollectionQuery = { __typename?: 'Query', usersCollection?: { __typename?: 'UsersConnection', edges: Array<{ __typename?: 'UsersEdge', cursor: string, node: { __typename?: 'Users', nodeId: string, id: any, created_at?: any | null, first_name?: string | null, last_name?: string | null, avatar_url?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };


export const DeleteFromIssuesCollectionDocument = gql`
    mutation deleteFromIssuesCollection($filter: IssuesFilter, $atMost: Int!) {
  deleteFromIssuesCollection(filter: $filter, atMost: $atMost) {
    affectedCount
    records {
      nodeId
      id
      created_at
      title
      description
      priority
    }
  }
}
    `;
export const DeleteFromUsersCollectionDocument = gql`
    mutation deleteFromUsersCollection($filter: UsersFilter, $atMost: Int!) {
  deleteFromUsersCollection(filter: $filter, atMost: $atMost) {
    affectedCount
    records {
      nodeId
      id
      created_at
      first_name
      last_name
      avatar_url
    }
  }
}
    `;
export const InsertIntoIssuesCollectionDocument = gql`
    mutation insertIntoIssuesCollection($objects: [IssuesInsertInput!]!) {
  insertIntoIssuesCollection(objects: $objects) {
    affectedCount
    records {
      nodeId
      id
      created_at
      title
      description
      priority
    }
  }
}
    `;
export const InsertIntoUsersCollectionDocument = gql`
    mutation insertIntoUsersCollection($objects: [UsersInsertInput!]!) {
  insertIntoUsersCollection(objects: $objects) {
    affectedCount
    records {
      nodeId
      id
      created_at
      first_name
      last_name
      avatar_url
    }
  }
}
    `;
export const UpdateIssuesCollectionDocument = gql`
    mutation updateIssuesCollection($set: IssuesUpdateInput!, $filter: IssuesFilter, $atMost: Int!) {
  updateIssuesCollection(set: $set, filter: $filter, atMost: $atMost) {
    affectedCount
    records {
      nodeId
      id
      created_at
      title
      description
      priority
    }
  }
}
    `;
export const UpdateUsersCollectionDocument = gql`
    mutation updateUsersCollection($set: UsersUpdateInput!, $filter: UsersFilter, $atMost: Int!) {
  updateUsersCollection(set: $set, filter: $filter, atMost: $atMost) {
    affectedCount
    records {
      nodeId
      id
      created_at
      first_name
      last_name
      avatar_url
    }
  }
}
    `;
export const IssuesCollectionDocument = gql`
    query issuesCollection($first: Int, $last: Int, $before: Cursor, $after: Cursor, $filter: IssuesFilter, $orderBy: [IssuesOrderBy!]) {
  issuesCollection(
    first: $first
    last: $last
    before: $before
    after: $after
    filter: $filter
    orderBy: $orderBy
  ) {
    edges {
      cursor
      node {
        nodeId
        id
        created_at
        title
        description
        priority
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const NodeDocument = gql`
    query node($nodeId: ID!) {
  node(nodeId: $nodeId) {
    nodeId
  }
}
    `;
export const UsersCollectionDocument = gql`
    query usersCollection($first: Int, $last: Int, $before: Cursor, $after: Cursor, $filter: UsersFilter, $orderBy: [UsersOrderBy!]) {
  usersCollection(
    first: $first
    last: $last
    before: $before
    after: $after
    filter: $filter
    orderBy: $orderBy
  ) {
    edges {
      cursor
      node {
        nodeId
        id
        created_at
        first_name
        last_name
        avatar_url
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    deleteFromIssuesCollection(variables: DeleteFromIssuesCollectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteFromIssuesCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteFromIssuesCollectionMutation>(DeleteFromIssuesCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteFromIssuesCollection', 'mutation');
    },
    deleteFromUsersCollection(variables: DeleteFromUsersCollectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteFromUsersCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteFromUsersCollectionMutation>(DeleteFromUsersCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteFromUsersCollection', 'mutation');
    },
    insertIntoIssuesCollection(variables: InsertIntoIssuesCollectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertIntoIssuesCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertIntoIssuesCollectionMutation>(InsertIntoIssuesCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertIntoIssuesCollection', 'mutation');
    },
    insertIntoUsersCollection(variables: InsertIntoUsersCollectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertIntoUsersCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertIntoUsersCollectionMutation>(InsertIntoUsersCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertIntoUsersCollection', 'mutation');
    },
    updateIssuesCollection(variables: UpdateIssuesCollectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateIssuesCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateIssuesCollectionMutation>(UpdateIssuesCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateIssuesCollection', 'mutation');
    },
    updateUsersCollection(variables: UpdateUsersCollectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUsersCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUsersCollectionMutation>(UpdateUsersCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUsersCollection', 'mutation');
    },
    issuesCollection(variables?: IssuesCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IssuesCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IssuesCollectionQuery>(IssuesCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'issuesCollection', 'query');
    },
    node(variables: NodeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NodeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NodeQuery>(NodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'node', 'query');
    },
    usersCollection(variables?: UsersCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersCollectionQuery>(UsersCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'usersCollection', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;