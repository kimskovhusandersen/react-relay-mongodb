import graphql from 'babel-plugin-relay/macro';

export const postListQuery = graphql`
  query postListQueryQuery {
    viewer {
      id
      allPosts(first: 1000)
        @connection(key: "PostListContainer_allPosts") {
        edges {
          node {
            id
            text
            author
          }
        }
      }
    }
  }
`;
