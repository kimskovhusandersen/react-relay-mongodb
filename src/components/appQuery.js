import graphql from 'babel-plugin-relay/macro';

export const appQuery = graphql`
  query appQueryQuery {
    viewer {
      id
      allContacts(first: 1000) @connection(key: "Main_allContacts") {
        edges {
          node {
            id
            name
            email
          }
        }
      }
    }
  }
`;
