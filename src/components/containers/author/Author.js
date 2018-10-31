import React from 'react';
import { Query } from "react-apollo";
import { Post } from "../../constants/molecules";
import query from "../../../queries/author";

function generatePosts(posts){
  return posts.map((post, index) => (
      <Post key={index} index={index} data={post} />
  ));
}

export default (props) => (
  <Query query={query} variables={{id: parseInt(props.match.params.id)}} >
    {({ loading, error, data: { author } }) => {
      if(loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="main">
          <h1>{author.first_name} {author.last_name}</h1>
          {generatePosts(author.Posts)}
        </div>
      );
    }}
  </Query>
)
