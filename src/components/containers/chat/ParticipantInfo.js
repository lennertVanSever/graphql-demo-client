import React from 'react';
import { AuthorName } from '../../constants/atoms';

function generateIsTyping(is_typing) {
  if(is_typing) {
    return <p>Is typing...</p>
  }
  return <p>Is active</p>;
}
function generateParticipants(participants) {
  return participants.map(({Author, is_typing}) => {
    if (Author.id !== 1) {
      return (
        <div key={Author.id}>
          <AuthorName data={Author} />
          { generateIsTyping() }
        </div>
      );
    }
  })
}

export default ({ participants }) => (
  <div className="participant_info" >
    {generateParticipants(participants)}
  </div>
);
