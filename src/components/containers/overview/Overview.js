import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getPosts = gql`
  query{
    posts{
      title
      description
      Author{
        first_name
        last_name
      }
      Comments{
        description
        likes
        Author{
          first_name
          last_name
        }
      }
    }
  }
`

export default () => {
  return (
    <Query query={getPosts}>
      {({ loading, error, data }) => {
        if(loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return(
          <p>test</p>
        )
      }}
    </Query>
  );
}
