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
