import { graphql, createFragmentContainer } from 'react-relay';

import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
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
