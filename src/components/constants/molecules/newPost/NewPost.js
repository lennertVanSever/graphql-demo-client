import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import query from "../../../../queries/posts";

class NewPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }
    submitPost(event, addPost){
        event.preventDefault();
        const { title, description } = this.state;
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
        this.setState({
            title: "",
            description: ""
        })
    }
    updateCache(cache, {data: { addPost }}){
        const { posts } = cache.readQuery({ query });
        console.log(cache);
        cache.writeQuery({
          query,
          data: { posts: [addPost].concat(posts) }
        });
    }
    render() {
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
        return (
            <Mutation mutation={addPost} update={(cache, data) => this.updateCache(cache, data)} >
                {(addPost) => (
                    <form onSubmit={(event) => this.submitPost(event, addPost)} className="card new_post post">
                        <input 
                            type="text" 
                            placeholder="title" 
                            value={this.state.title}
                            onChange={(event) => this.setState({title: event.target.value})}
                        />
                        <textarea 
                            placeholder="description" 
                            value={this.state.description}
                            onChange={(event) => this.setState({description: event.target.value})}
                        />
                        <input type="submit" value="post" />
                    </form>
                )}
            </Mutation>
        );
    }
}

export default NewPost;
