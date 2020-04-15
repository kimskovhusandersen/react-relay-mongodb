const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    text: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
  },
});
