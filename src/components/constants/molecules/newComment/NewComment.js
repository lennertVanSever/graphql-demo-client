import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import query from "../../../../queries/posts";

class NewComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: ""
        }
    }
    
    submitComment(event, addComment){
        event.preventDefault();
        addComment({
            variables: {
                Comment: {
                    description: this.state.description,
                    post_id: this.props.postId,
                    author_id: 3
                }
            },
            refetchQueries: [{query}],
        });
        this.setState({
            description: ""
        })
    }

    render() {
        const addComment = gql`
            mutation addComment($Comment: InputComment!){
                addComment(Comment: $Comment){
                    description
                    Author{
                        first_name
                        last_name
                    }
                }
            }
        `;
        return (
            <Mutation mutation={addComment}>
                {(addComment) => (
                    <form 
                        className="newComment"
                        onSubmit={(event) => this.submitComment(event, addComment)}
                    >
                        <input 
                            type="text"
                            placeholder="What do you think?" 
                            name="new comment" 
                            value={this.state.description}
                            onChange={(event) => this.setState({description: event.target.value})}
                        />
                        <input 
                            type="submit" 
                            value="comment" 
                        />
                    </form>
                )}
            </Mutation>
        );
    }
}

export default NewComment;
