import gql from 'graphql-tag'

export const DogFragment = gql`
	fragment DogFields on Dog {
		id
		name
		age
		isPedigree
	}
`

export const GET_DOGS = gql`
	query GetDogs {
		dogs {
			...DogFields
		}
	}
`

export const ADD_DOG = gql`
	mutation AddDog($addDogInput: AddDog!) {
		addDog(input: $addDogInput) {
			...DogFields
		}
	}
`

export const REMOVE_DOG = gql`
	mutation RemoveDog($removeDogId: ID!) {
		removeDog(id: $removeDogId)
	}
`
