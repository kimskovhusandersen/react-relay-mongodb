import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../js/environment';
import { GET_CONTACTS } from './contact-list-query';

const QueryComponent = ({ children }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={GET_CONTACTS}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }

        return children(props);
      }}
    />
  );
};

export default QueryComponent;
