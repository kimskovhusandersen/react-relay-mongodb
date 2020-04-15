import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <p>Text: {post.text}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default Post;
