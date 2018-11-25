import gql from "graphql-tag";

export default gql`
  query getConversation($id: Int!){
    conversation(id: $id) {
      Participants {
        is_typing
        Author {
          id
          first_name
          last_name
        }
      }
      Messages {
        id
        text
        Author {
          id
        }
      }
    }
  }
`