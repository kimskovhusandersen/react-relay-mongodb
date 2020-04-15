import React, { Component } from 'react';

import postListQuery from './postListQuery';

import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import PostList from './PostList';

class PostListContainer extends Component {
  render() {
    console.log(this.props);
    let postList = null;
    if (this.props.allPosts) {
      postList = <PostList edges={this.props.allPosts.edges} />;
    }
    return postList;
  }
}

export default createFragmentContainer(PostListContainer, {
  // For each of the props that depend on server data, we define a corresponding
  // key in this object. Here, the component expects server data to populate the
  // `item` prop, so we'll specify the fragment from above at the `item` key.
  allPosts: graphql`
    fragment PostListContainer_allPosts on Post {
      text
      author
    }
  `,
});
