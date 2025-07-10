import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with your actual GraphQL API URL
  }),
  cache: new InMemoryCache(),
});

export default client;