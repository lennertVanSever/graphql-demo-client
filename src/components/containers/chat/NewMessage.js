import React, { useState } from 'react';
import gql from "graphql-tag";
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

function submitMessage(event, addMessage, message, setMessage, lastId) {
  event.preventDefault();
  setMessage('');
  addMessage({
    variables: {
      Message: {
        text: message,
        author_id: 1,
        conversation_id: 1
      } 
    }
  })
}

export default ({ lastId }) => {
  const [message, setMessage] = useState('');
  return (
    <Mutation mutation={addMessage}>
      {(addMessage) => (
        <form 
          className="new_message"
          onSubmit={(event) => submitMessage(event, addMessage, message, setMessage, lastId)} 
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
