'use client'
import React from 'react'
import { NODE_GRAPHQL_URL } from '../../utils/config'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getIdentityTokenAsync } from '../../utils/lib/getIdentityTokenAsync'

const httpLink = createHttpLink({
  uri: NODE_GRAPHQL_URL
})

const cache = new InMemoryCache()

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  const authLink = setContext(async () => {
    const idToken = await getIdentityTokenAsync()
    return {
      headers: {
        Authorization: idToken ? `${idToken}` : ''
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
