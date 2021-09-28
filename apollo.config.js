module.exports = {
	client: {
		service: {
			name: 'api',
			url: 'http://localhost:4000/graphql'
		},
		includes: ['./src/constants/queries/**/*.ts']
	}
}
