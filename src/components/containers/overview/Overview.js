import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Post, Comment } from "../../constants/molecules";

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

function generateComments(comments){
  return comments.map((comment, index) => <Comment key={index} data={comment} />);
}

function generatePosts(posts){
  return posts.map((post, index) => (
      <Post key={index} data={post}>
        {generateComments(post.Comments)}
      </Post>
  ));
}

export default () => (
  <Query query={getPosts}>
    {({ loading, error, data }) => {
      if(loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return generatePosts(data.posts);
    }}
  </Query>
)
