import { ApolloProvider } from '@apollo/client'
import { GlobalStyle } from './styles/global'
import { client } from './api/client'
import { Dogs } from './screens/Dogs'

export const App = () => (
	<ApolloProvider client={client}>
		<GlobalStyle />
		<Dogs />
	</ApolloProvider>
)

export default App
