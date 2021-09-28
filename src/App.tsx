import { ApolloProvider } from "@apollo/client"
import { GlobalStyle } from "./styles/global"
import { client } from "./api/client"

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <div className="App"></div>
    </ApolloProvider>
  )
}

export default App
