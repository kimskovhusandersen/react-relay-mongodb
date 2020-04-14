import React from 'react';
import QueryComponent from './components/ContactList/ContactListQueryComponent';
import FormMutationComponent from './js/MutationComponent';
import ContactList from './components/ContactList/ContactList';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <QueryComponent>
        {data => {
          return (
            <>
              <ContactList edges={data.viewer.allContacts.edges} />
              <FormMutationComponent viewer={data.viewer} />
            </>
          );
        }}
      </QueryComponent>
    </div>
  );
};

export default App;
