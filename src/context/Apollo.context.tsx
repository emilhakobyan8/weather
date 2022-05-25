import React, {PropsWithChildren, ReactNode} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
  cache: new InMemoryCache(),
});

const GraphQlProvider = ({children}: PropsWithChildren<ReactNode>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
