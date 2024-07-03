/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthError = {
  __typename?: 'AuthError';
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type AuthOpResponse = {
  __typename?: 'AuthOpResponse';
  errors?: Maybe<AuthError>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  project?: Maybe<Project>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<AuthError>;
  ok: Scalars['Boolean']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type CreateProject = {
  description: Scalars['String']['input'];
  githubRepoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Project = {
  __typename?: 'Project';
  bannerUrl?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  featured?: Maybe<Scalars['Boolean']['output']>;
  githubRepoUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type RegisterInput = {
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create a new project */
  createProject?: Maybe<AuthOpResponse>;
  /** delete a project */
  deleteProject?: Maybe<Scalars['Boolean']['output']>;
  /** Login into a user account */
  login?: Maybe<AuthResponse>;
  /** Register a new user account */
  register?: Maybe<AuthResponse>;
  /** Update a project */
  updateProject?: Maybe<AuthOpResponse>;
};


export type RootMutationTypeCreateProjectArgs = {
  data: CreateProject;
};


export type RootMutationTypeDeleteProjectArgs = {
  projectId: Scalars['ID']['input'];
};


export type RootMutationTypeLoginArgs = {
  data: LoginInput;
};


export type RootMutationTypeRegisterArgs = {
  data: RegisterInput;
};


export type RootMutationTypeUpdateProjectArgs = {
  data: UpdateProject;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get all projects */
  getAllProjects?: Maybe<Array<Maybe<Project>>>;
  /** Get all  a featured projects */
  getFeaturedProjects?: Maybe<Array<Maybe<Project>>>;
  /** Get a single project */
  getProject?: Maybe<Project>;
  /** Get currently logged in user profile */
  me?: Maybe<User>;
  /** Get user with id */
  user?: Maybe<User>;
  /** Get all users */
  users?: Maybe<Array<Maybe<User>>>;
};


export type RootQueryTypeGetProjectArgs = {
  projectId: Scalars['ID']['input'];
};


export type RootQueryTypeUserArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateProject = {
  description: Scalars['String']['input'];
  githubRepoUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  blog?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'RootQueryType', me?: { __typename?: 'User', id: string, avatarUrl?: string | null, bio?: string | null, blog?: string | null, displayName?: string | null, email: string, username: string, website?: string | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'RootMutationType', login?: { __typename?: 'AuthResponse', ok: boolean, accessToken?: string | null, refreshToken?: string | null, errors?: { __typename?: 'AuthError', field?: string | null, message?: string | null } | null } | null };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'RootMutationType', register?: { __typename?: 'AuthResponse', ok: boolean, refreshToken?: string | null, accessToken?: string | null, errors?: { __typename?: 'AuthError', field?: string | null, message?: string | null } | null } | null };


export const WhoAmIDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WhoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"blog"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]} as unknown as DocumentNode<WhoAmIQuery, WhoAmIQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"displayName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;