import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

//using graphQL
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';



//github api v4 사용하기
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = "c819b3f43c452b376c8a24919209afeb8b515da5";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

//client생성
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

//reducer사용
const store = createStore(reducers);

//test
client
  .query({
    query: gql`
    {
        search (query: "piglee03", type: USER, first: 1){
          edges {
            node {
              ... on User {
                login
                name
                email
                bio
                url
                company
                location
              }
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));

 ReactDOM.render(
    <ApolloProvider client = {client}>
        <Provider store = {store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
