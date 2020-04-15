const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    _id: { type: GraphQLID },
    text: { type: GraphQLString },
    author: { type: GraphQLString },
  },
});
