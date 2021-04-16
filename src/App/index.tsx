import { GlobalStyle } from "../styles/global";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import FormName from '../components/FormName';
import ListName from '../components/ListName';

import { AppContainer } from './styles';

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_APOLLO_URL_QUERY,
});

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_APOLLO_URL_SUBSCRIPTION || "wss://localhost:3000/",
    options: {
    reconnect: true
  }
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <GlobalStyle/>
        <header><h1>My name is Funny</h1></header>
        <main>
          <FormName />
          <ListName />
        </main>
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
