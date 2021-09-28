import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyle } from './styles/global'
import { client } from './api/client'
import { Dogs } from './screens/Dogs'

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Dogs />
    </ApolloProvider>
  )
}

export default App
