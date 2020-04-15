import Cursor from './Cursor';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType,
} from 'graphql';

export const PageInfo = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    startCursor: {
      type: GraphQLString,
    },
    endCursor: {
      type: GraphQLString,
    },
  },
});

export const Contact = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: parent => parent._id.toString(),
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  },
});

export const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: parent => parent._id.toString(),
    },
    text: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
  },
});

const ContactEdge = new GraphQLObjectType({
  name: 'ContactEdge',
  fields: () => ({
    cursor: {
      type: Cursor,
      resolve: parent => ({
        value: parent._id.toString(),
      }),
    },
    node: {
      type: Contact,
      resolve: parent => parent,
    },
  }),
});

const PostEdge = new GraphQLObjectType({
  name: 'PostEdge',
  fields: () => ({
    cursor: {
      type: Cursor,
      resolve: parent => ({
        value: parent._id.toString(),
      }),
    },
    node: {
      type: Post,
      resolve: parent => parent,
    },
  }),
});

export const ContactPayload = new GraphQLObjectType({
  name: 'ContactPayload',
  fields: {
    contactEdge: {
      type: ContactEdge,
    },
  },
});

const ContactConnection = new GraphQLObjectType({
  name: 'ContactConnection',
  fields: () => ({
    edges: {
      type: new GraphQLList(ContactEdge),
      resolve: async parent => await parent.query.find().toArray(),
    },
    pageInfo: {
      type: PageInfo,
    },
  }),
});

const PostConnection = new GraphQLObjectType({
  name: 'PostConnection',
  fields: () => ({
    edges: {
      type: new GraphQLList(PostEdge),
      resolve: async parent => await parent.query.find().toArray(),
    },
    pageInfo: {
      type: PageInfo,
    },
  }),
});

export function createConnectionArguments() {
  return {
    first: {
      type: GraphQLInt,
    },
    last: {
      type: GraphQLInt,
    },
  };
}

export const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    allContacts: {
      type: ContactConnection,
      args: createConnectionArguments(),
      resolve: (_, args, { mongodb }) => ({
        query: mongodb.collection('contacts'),
      }),
    },
    allPosts: {
      type: PostConnection,
      args: createConnectionArguments(),
      resolve: (_, args, { mongodb }) => ({
        query: mongodb.collection('posts'),
      }),
    },
  }),
});
