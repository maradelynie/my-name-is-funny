import { render, screen,act } from '@testing-library/react';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import ListName from './index';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'https://my-name-is-funny.herokuapp.com/v1/graphql'
});

const wsLink = new WebSocketLink({
  uri: 'ws://my-name-is-funny.herokuapp.com/v1/graphql',
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

test('if it show loading',async () => {
  render(
    <ApolloProvider client={client}>
      <ListName />
    </ApolloProvider>
  );

  const loadingElement = screen.getByTestId("loading");
  expect(loadingElement).toBeInTheDocument()
  await act(async () => {
    await new Promise((r) => setTimeout(r, 3000));
    expect(loadingElement).not.toBeInTheDocument()
  });
  
});
