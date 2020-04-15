import React from 'react';

import { graphql, createFragmentContainer } from 'react-relay';

import Posts from '../Posts/PostListContainer';

const Contact = ({ contact }) => {
  return (
    <div>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <Posts />
    </div>
  );
};

export default Contact;

// export default createFragmentContainer(Contact, {
//   contact: graphql`
//     fragment Contact_contact on Contact {
//       name
//       email
//     }
//   `,
// });
