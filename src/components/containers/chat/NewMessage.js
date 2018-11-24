import React, { useState } from 'react';
import gql from "graphql-tag";
import query from "../../../queries/conversation";
import { Mutation } from "react-apollo";

const addMessage = gql`
    mutation addMessage($Message: InputMessage!){
      addMessage(Message: $Message){
        text
        Author{
          id
          first_name
          last_name
        }
      }
    }
`;

function submitMessage(event, addMessage, message, setMessage) {
  event.preventDefault();
  setMessage('');
  addMessage({
    variables: {
      Message: {
        text: message,
        author_id: 1,
        conversation_id: 1
      } 
    },
    refetchQueries: [{
      query,
      variables: {
        id: 1
      }
    }],
  })
}

export default () => {
  const [message, setMessage] = useState('');
  return (
    <Mutation mutation={addMessage}>
      {(addMessage) => (
        <form 
          className="new_message"
          onSubmit={(event) => submitMessage(event, addMessage, message, setMessage)} 
        >
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            type="text"
            placeholder="New message"
          />
          <button>Send</button>
        </form>
      )}
    </Mutation>
  );
}
