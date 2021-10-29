const { REACT_APP_API_URL: ENV_API_URL } = process.env

export const API_URL = ENV_API_URL || 'http://localhost:4000/graphql'
