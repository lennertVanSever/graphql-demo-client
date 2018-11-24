import React from 'react';
import { Query } from "react-apollo";
import query from "../../../queries/conversation";
import ParticipantInfo from './ParticipantInfo';
import Messages from './Messages';
import NewMessage from './NewMessage';


export default () => (
  <Query query={query} variables={{ id: 1 }}>
    {({ loading, error, data }) => {
      if(loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="conversation_wrapper">
          <ParticipantInfo participants={data.conversation.Participants} />
          <Messages messages={data.conversation.Messages} />
          <NewMessage />
        </div>
      );
    }}
  </Query>
)
