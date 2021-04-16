import { render, screen, act, fireEvent } from '@testing-library/react';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import FormName from './index';
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

test('if it renders form content', () => {
  render(
    <ApolloProvider client={client}>
      <FormName />
    </ApolloProvider>
  );

  const labelElement = screen.getByText(/If you think your name is funny, send it:/i);
  const placeholderElement = screen.getByPlaceholderText(/your name here/i);
  const buttonElement = screen.getByRole('button')

  expect(labelElement).toBeInTheDocument();
  expect(placeholderElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  
});

test('if it send form', async () => {
  render(
    <ApolloProvider client={client}>
      <FormName />
    </ApolloProvider>
  );

  const InputElement = screen.getByRole('textbox') as HTMLInputElement;
  const buttonElement = screen.getByRole('button');

  await act( async () => {
    await fireEvent.change(InputElement, { target: { value: 'teste' } });
    await expect(InputElement.value).toContain('test');
    await fireEvent.click(buttonElement);
    await new Promise((r) => setTimeout(r, 3000));
    await expect(InputElement.value).toContain('');
  });
});