import React from 'react';

import FormMutationComponent from '../mutations/MutationComponent';
import ContactList from './Contacts/ContactList';

import './App.css';

const App = props => {
  return (
    <div className="container">
      <ContactList edges={props.viewer.allContacts.edges} />
      <FormMutationComponent viewer={props.viewer} />
    </div>
  );
};

export default App;
