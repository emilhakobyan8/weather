import React, {PropsWithChildren, ReactNode} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Config from 'react-native-config';

const client = new ApolloClient({
  uri: Config.APOLLO_ENDPOINT,
  cache: new InMemoryCache(),
});

const GraphQlProvider = ({children}: PropsWithChildren<ReactNode>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
