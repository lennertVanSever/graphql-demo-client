import React from 'react';
import Message from './Message';

function generateMessages(messages) {
  return messages.map((data) => (
   <Message key={data.id} data={data} />
  ));
}

export default ({ messages }) => (
  <div className="messages">
    <div className="message_wrapper">
      {generateMessages(messages)}
    </div>
  </div>
);
