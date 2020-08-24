import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import {SpaceXRequest} from "./SpaceX";

const httpLink = {
    uri: 'https://api.spacex.land/graphql/',
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

class App extends Component {
   render() {
       return (
           <ApolloProvider client={client}>
               <SpaceXRequest/>
           </ApolloProvider>
       );
   }
}

export {App}