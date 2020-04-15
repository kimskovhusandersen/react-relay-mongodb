/**
 * @flow
 * @relayHash 50d639c8271234804dbfceacbdaa9117
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type srcQueryVariables = {||};
export type srcQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +allContacts: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +email: ?string,
        |}
      |}>
    |},
    +allPosts: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +text: ?string,
          +author: ?string,
        |}
      |}>
    |},
  |}
|};
export type srcQuery = {|
  variables: srcQueryVariables,
  response: srcQueryResponse,
|};
*/


/*
query srcQuery {
  viewer {
    id
    allContacts(first: 1000) {
      edges {
        node {
          id
          name
          email
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    allPosts(first: 1000) {
      edges {
        node {
          id
          text
          author
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ContactEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          v1
        ]
      },
      v2
    ]
  },
  v3
],
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "PostEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "author",
            "args": null,
            "storageKey": null
          },
          v1
        ]
      },
      v2
    ]
  },
  v3
],
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "srcQuery",
  "id": null,
  "text": "query srcQuery {\n  viewer {\n    id\n    allContacts(first: 1000) {\n      edges {\n        node {\n          id\n          name\n          email\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    allPosts(first: 1000) {\n      edges {\n        node {\n          id\n          text\n          author\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "viewer",
          "allContacts"
        ]
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "viewer",
          "allPosts"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "srcQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": "allContacts",
            "name": "__index_allContacts_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "ContactConnection",
            "plural": false,
            "selections": v4
          },
          {
            "kind": "LinkedField",
            "alias": "allPosts",
            "name": "__PostListContainer_allPosts_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "PostConnection",
            "plural": false,
            "selections": v5
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "srcQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allContacts",
            "storageKey": "allContacts(first:1000)",
            "args": v6,
            "concreteType": "ContactConnection",
            "plural": false,
            "selections": v4
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allContacts",
            "args": v6,
            "handle": "connection",
            "key": "index_allContacts",
            "filters": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPosts",
            "storageKey": "allPosts(first:1000)",
            "args": v6,
            "concreteType": "PostConnection",
            "plural": false,
            "selections": v5
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": v6,
            "handle": "connection",
            "key": "PostListContainer_allPosts",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '899921ca2e16853644269fb8e0c1b8d2';
module.exports = node;
