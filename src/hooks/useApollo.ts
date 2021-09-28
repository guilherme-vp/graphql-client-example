import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
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
	age: Scalars['Int']
	isPedigree?: Maybe<Scalars['Boolean']>
	name: Scalars['String']
}

export type Dog = {
	__typename?: 'Dog'
	age: Scalars['Int']
	id: Scalars['ID']
	isPedigree?: Maybe<Scalars['Boolean']>
	name: Scalars['String']
}

export type Mutation = {
	__typename?: 'Mutation'
	addDog: Dog
	removeDog: Scalars['Boolean']
}

export type MutationAddDogArgs = {
	input: AddDog
}

export type MutationRemoveDogArgs = {
	id: Scalars['ID']
}

export type Query = {
	__typename?: 'Query'
	dog: Dog
	dogs?: Maybe<Array<Dog>>
}

export type QueryDogArgs = {
	id: Scalars['ID']
}

export type DogFieldsFragment = {
	__typename?: 'Dog'
	id: string
	name: string
	age: number
	isPedigree?: Maybe<boolean>
}

export type GetDogsQueryVariables = Exact<{ [key: string]: never }>

export type GetDogsQuery = {
	__typename?: 'Query'
	dogs?: Maybe<
		Array<{
			__typename?: 'Dog'
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
export const GetDogsDocument = gql`
	query GetDogs {
		dogs {
			...DogFields
		}
	}
	${DogFieldsFragmentDoc}
`

/**
 * __useGetDogsQuery__
 *
 * To run a query within a React component, call `useGetDogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDogsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetDogsQuery, GetDogsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetDogsQuery, GetDogsQueryVariables>(GetDogsDocument, options)
}
export function useGetDogsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetDogsQuery, GetDogsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetDogsQuery, GetDogsQueryVariables>(GetDogsDocument, options)
}
export type GetDogsQueryHookResult = ReturnType<typeof useGetDogsQuery>
export type GetDogsLazyQueryHookResult = ReturnType<typeof useGetDogsLazyQuery>
export type GetDogsQueryResult = Apollo.QueryResult<GetDogsQuery, GetDogsQueryVariables>

export interface PossibleTypesResultData {
	possibleTypes: {
		[key: string]: string[]
	}
}
const result: PossibleTypesResultData = {
	possibleTypes: {}
}
export default result
