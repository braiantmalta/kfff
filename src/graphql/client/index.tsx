/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  concat,
} from '@apollo/client';
import { Storages } from '@utils/constants';
import { useMemo } from 'react';
import { createUploadLink } from 'apollo-upload-client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const link = createUploadLink({ uri: process.env.REACT_APP_API });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem(Storages.userToken) || null,
    },
  }));

  return forward(operation);
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    //@ts-ignore
    link: concat(authMiddleware, link),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = {}) {
  // serve para verificar se já existe uma instância, para não criar outra

  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui.
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal;
  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
