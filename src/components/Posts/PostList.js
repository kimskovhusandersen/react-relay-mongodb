import React from 'react';
import Post from './Post';

const PostList = ({ edges = [] }) => {
  return (
    <div className="PostList">
      {edges.map(edge => {
        const post = edge.node;
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
