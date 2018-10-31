import React from 'react';
import { Query } from "react-apollo";
import { Post, NewPost, Header } from "../../constants/molecules";
import query from "../../../queries/posts";

function generatePosts(posts){
  return posts.map((post, index) => (
      <Post key={index} index={index} data={post} />
  ));
}

export default () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if(loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="main">
          <Header />
          <NewPost />
          {generatePosts(data.posts)}
        </div>
      );
    }}
  </Query>
)
