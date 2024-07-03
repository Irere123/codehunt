/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query FeaturedProjects {\n    getFeaturedProjects {\n      bannerUrl\n      description\n      name\n      githubRepoUrl\n      name\n      website\n      id\n      picture\n      featured\n    }\n  }\n": types.FeaturedProjectsDocument,
    "\n  query Projects {\n    getAllProjects {\n      bannerUrl\n      description\n      name\n      githubRepoUrl\n      name\n      website\n      id\n      picture\n      featured\n    }\n  }\n": types.ProjectsDocument,
    "\n  query WhoAmI {\n    me {\n      id\n      avatarUrl\n      bio\n      blog\n      displayName\n      email\n      username\n      website\n    }\n  }\n": types.WhoAmIDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(data: { email: $email, password: $password }) {\n      ok\n      errors {\n        field\n        message\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  query GetProfile($id: ID!) {\n    user(id: $id) {\n      id\n      username\n      displayName\n      bio\n      blog\n      website\n      email\n      insertedAt\n      updatedAt\n    }\n  }\n": types.GetProfileDocument,
    "\n  mutation Register(\n    $username: String!\n    $displayName: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(\n      data: {\n        username: $username\n        displayName: $displayName\n        email: $email\n        password: $password\n      }\n    ) {\n      ok\n      errors {\n        field\n        message\n      }\n      refreshToken\n      accessToken\n    }\n  }\n": types.RegisterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FeaturedProjects {\n    getFeaturedProjects {\n      bannerUrl\n      description\n      name\n      githubRepoUrl\n      name\n      website\n      id\n      picture\n      featured\n    }\n  }\n"): (typeof documents)["\n  query FeaturedProjects {\n    getFeaturedProjects {\n      bannerUrl\n      description\n      name\n      githubRepoUrl\n      name\n      website\n      id\n      picture\n      featured\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Projects {\n    getAllProjects {\n      bannerUrl\n      description\n      name\n      githubRepoUrl\n      name\n      website\n      id\n      picture\n      featured\n    }\n  }\n"): (typeof documents)["\n  query Projects {\n    getAllProjects {\n      bannerUrl\n      description\n      name\n      githubRepoUrl\n      name\n      website\n      id\n      picture\n      featured\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query WhoAmI {\n    me {\n      id\n      avatarUrl\n      bio\n      blog\n      displayName\n      email\n      username\n      website\n    }\n  }\n"): (typeof documents)["\n  query WhoAmI {\n    me {\n      id\n      avatarUrl\n      bio\n      blog\n      displayName\n      email\n      username\n      website\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(data: { email: $email, password: $password }) {\n      ok\n      errors {\n        field\n        message\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(data: { email: $email, password: $password }) {\n      ok\n      errors {\n        field\n        message\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProfile($id: ID!) {\n    user(id: $id) {\n      id\n      username\n      displayName\n      bio\n      blog\n      website\n      email\n      insertedAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetProfile($id: ID!) {\n    user(id: $id) {\n      id\n      username\n      displayName\n      bio\n      blog\n      website\n      email\n      insertedAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register(\n    $username: String!\n    $displayName: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(\n      data: {\n        username: $username\n        displayName: $displayName\n        email: $email\n        password: $password\n      }\n    ) {\n      ok\n      errors {\n        field\n        message\n      }\n      refreshToken\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation Register(\n    $username: String!\n    $displayName: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(\n      data: {\n        username: $username\n        displayName: $displayName\n        email: $email\n        password: $password\n      }\n    ) {\n      ok\n      errors {\n        field\n        message\n      }\n      refreshToken\n      accessToken\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;