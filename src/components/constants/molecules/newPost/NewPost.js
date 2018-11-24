import React, { useState } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import query from "../../../../queries/posts";

function submitPost(event, addPost, title, description, setTitle, setDescription){
    event.preventDefault();
    addPost({
        variables:{
            Post: {
                title,
                description,
                author_id: 1
            }
        },
        optimisticResponse: {
            __typename: "Mutation",
            addPost: {
                __typename: "Post",
                id: 0,
                title,
                description,
                Author: {
                    __typename: "Author",
                    id: 1,
                    first_name: "lennert",
                    last_name: "van sever"
                },
                Comments: []
            }
        }
    });
    setTitle('');
    setDescription('');
}

function updateCache(cache, {data: { addPost }}){
    const { posts } = cache.readQuery({ query });
    cache.writeQuery({
      query,
      data: { posts: [addPost].concat(posts) }
    });
}

const NewPost = () => {
    const addPost = gql`
        mutation addPost($Post: InputPost!){
            addPost(Post: $Post){
                id
                title
                description
                Author{
                    id
                    first_name
                    last_name
                }
                Comments{
                    description
                }
            }
        }
    `;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <Mutation mutation={addPost} update={(cache, data) =>updateCache(cache, data)} >
            {(addPost) => (
                <form onSubmit={(event) => submitPost(event, addPost, title, description, setTitle, setDescription)} className="card new_post post">
                    <input 
                        type="text" 
                        placeholder="title" 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="description" 
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input type="submit" value="post" />
                </form>
            )}
        </Mutation>
    );
}

export default NewPost;
