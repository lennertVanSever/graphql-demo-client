import gql from "graphql-tag";

export default gql`
  query{
    posts{
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
        Author{
          id
          first_name
          last_name
        }
      }
    }
  }
`