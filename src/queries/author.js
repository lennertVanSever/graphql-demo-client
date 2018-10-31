import gql from "graphql-tag";

export default gql`
  query getAuthor($id: Int!){
    author(id: $id){
        first_name
        last_name
        Posts {
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
  }
`