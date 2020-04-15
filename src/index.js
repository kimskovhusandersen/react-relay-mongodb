import React from 'react';
import ReactDOM from 'react-dom';

import { QueryRenderer } from 'react-relay';
import environment from './environment';
import graphql from 'babel-plugin-relay/macro';

import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return (
      <>
        <App viewer={props.viewer} />
      </>
    );
  }
  return <div>Loading...</div>;
};

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <QueryRenderer
      environment={environment}
      query={graphql`
        query srcQuery {
          viewer {
            id
            allContacts(first: 1000)
              @connection(key: "index_allContacts") {
              edges {
                node {
                  id
                  name
                  email
                }
              }
            }
          }
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
      `}
      render={renderQuery}
    />,
    rootElement,
  );
}

serviceWorker.unregister();
