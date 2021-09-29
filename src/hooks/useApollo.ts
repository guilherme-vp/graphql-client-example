import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

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
	age: Scalars['Int']
	isPedigree: Scalars['Boolean']
	name: Scalars['String']
}

export type Dog = {
	__typename?: 'Dog'
	age: Scalars['Int']
	id: Scalars['ID']
	isPedigree: Scalars['Boolean']
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
	isPedigree: boolean
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
			isPedigree: boolean
		}>
	>
}

export type AddDogMutationVariables = Exact<{
	addDogInput: AddDog
}>

export type AddDogMutation = {
	__typename?: 'Mutation'
	addDog: { __typename?: 'Dog'; id: string; name: string; age: number; isPedigree: boolean }
}

export type RemoveDogMutationVariables = Exact<{
	removeDogId: Scalars['ID']
}>

export type RemoveDogMutation = { __typename?: 'Mutation'; removeDog: boolean }

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
export const AddDogDocument = gql`
	mutation AddDog($addDogInput: AddDog!) {
		addDog(input: $addDogInput) {
			...DogFields
		}
	}
	${DogFieldsFragmentDoc}
`
export type AddDogMutationFn = Apollo.MutationFunction<
	AddDogMutation,
	AddDogMutationVariables
>

/**
 * __useAddDogMutation__
 *
 * To run a mutation, you first call `useAddDogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDogMutation, { data, loading, error }] = useAddDogMutation({
 *   variables: {
 *      addDogInput: // value for 'addDogInput'
 *   },
 * });
 */
export function useAddDogMutation(
	baseOptions?: Apollo.MutationHookOptions<AddDogMutation, AddDogMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<AddDogMutation, AddDogMutationVariables>(
		AddDogDocument,
		options
	)
}
export type AddDogMutationHookResult = ReturnType<typeof useAddDogMutation>
export type AddDogMutationResult = Apollo.MutationResult<AddDogMutation>
export type AddDogMutationOptions = Apollo.BaseMutationOptions<
	AddDogMutation,
	AddDogMutationVariables
>
export const RemoveDogDocument = gql`
	mutation RemoveDog($removeDogId: ID!) {
		removeDog(id: $removeDogId)
	}
`
export type RemoveDogMutationFn = Apollo.MutationFunction<
	RemoveDogMutation,
	RemoveDogMutationVariables
>

/**
 * __useRemoveDogMutation__
 *
 * To run a mutation, you first call `useRemoveDogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDogMutation, { data, loading, error }] = useRemoveDogMutation({
 *   variables: {
 *      removeDogId: // value for 'removeDogId'
 *   },
 * });
 */
export function useRemoveDogMutation(
	baseOptions?: Apollo.MutationHookOptions<RemoveDogMutation, RemoveDogMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<RemoveDogMutation, RemoveDogMutationVariables>(
		RemoveDogDocument,
		options
	)
}
export type RemoveDogMutationHookResult = ReturnType<typeof useRemoveDogMutation>
export type RemoveDogMutationResult = Apollo.MutationResult<RemoveDogMutation>
export type RemoveDogMutationOptions = Apollo.BaseMutationOptions<
	RemoveDogMutation,
	RemoveDogMutationVariables
>

export interface PossibleTypesResultData {
	possibleTypes: {
		[key: string]: string[]
	}
}
const result: PossibleTypesResultData = {
	possibleTypes: {}
}
export default result
