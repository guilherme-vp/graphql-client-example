import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AddDog = {
  age: Scalars["Int"]
  isPedigree?: Maybe<Scalars["Boolean"]>
  name: Scalars["String"]
}

export type Dog = {
  __typename?: "Dog"
  age: Scalars["Int"]
  id: Scalars["ID"]
  isPedigree?: Maybe<Scalars["Boolean"]>
  name: Scalars["String"]
}

export type Mutation = {
  __typename?: "Mutation"
  addDog: Dog
  removeDog: Scalars["Boolean"]
}

export type MutationAddDogArgs = {
  input: AddDog
}

export type MutationRemoveDogArgs = {
  id: Scalars["ID"]
}

export type Query = {
  __typename?: "Query"
  dog: Dog
  dogs?: Maybe<Array<Dog>>
}

export type QueryDogArgs = {
  id: Scalars["ID"]
}

export type DogFieldsFragment = {
  __typename?: "Dog"
  id: string
  name: string
  age: number
  isPedigree?: Maybe<boolean>
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = {
  __typename?: "Query"
  dogs?: Maybe<
    Array<{
      __typename?: "Dog"
      id: string
      name: string
      age: number
      isPedigree?: Maybe<boolean>
    }>
  >
}

export const DogFieldsFragmentDoc = gql`
  fragment DogFields on Dog {
    id
    name
    age
    isPedigree
  }
`
export const Document = gql`
  {
    dogs {
      ...DogFields
    }
  }
  ${DogFieldsFragmentDoc}
`

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Query, QueryVariables>(Document, options)
}
export function useLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Query, QueryVariables>(Document, options)
}
export type QueryHookResult = ReturnType<typeof useQuery>
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
}
export default result
