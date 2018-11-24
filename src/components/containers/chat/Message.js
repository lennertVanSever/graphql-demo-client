import React from 'react';

function messageRightOrLeft(id) {
  if (id === 1) {
    return 'message--left';
  }
  return 'message--right';
}

export default ({data: { text, Author: { id }}}) => (
    <div className={`message ${messageRightOrLeft(id)}`}>
        <p>{text}</p>
    </div>
);
