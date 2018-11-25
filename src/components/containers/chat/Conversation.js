import React from 'react';
import { Query, Subscription } from "react-apollo";
import query from "../../../queries/conversation";
import ParticipantInfo from './ParticipantInfo';
import Messages from './Messages';
import NewMessage from './NewMessage';
import gql from "graphql-tag";

const messageAdded = gql`
  subscription {
    messageAdded {
      id
      text
      Author {
        id
      }
    }
  }
`;


export default () => (
  <Subscription
    subscription={messageAdded}
  >
    {({ data }) => {
      let extraMessage = null;
      if (data) {
        extraMessage = data.messageAdded;
      }
      return (
        <Query query={query} variables={{ id: 1 }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const lastMessage = data.conversation.Messages[data.conversation.Messages.length - 1];
            if (extraMessage && lastMessage) {
                if(lastMessage.id !== extraMessage.id){
                  data.conversation.Messages.push(extraMessage);
                }
            }
            return (
              <div className="conversation_wrapper">
                <ParticipantInfo participants={data.conversation.Participants} />
                <Messages messages={data.conversation.Messages} />
                <NewMessage/>
              </div>
            );
          }}
        </Query>
      )
    }}
  </Subscription>
)
