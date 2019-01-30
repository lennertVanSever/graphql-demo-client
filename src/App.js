import React, { Component } from 'react';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Routes from "./Routes";
import "./assets/dist/css/main.css";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes/>
      </ApolloProvider>
    );
  }
}

export default App;
