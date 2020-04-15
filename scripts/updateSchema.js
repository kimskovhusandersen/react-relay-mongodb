// packages/server/scripts/updateSchema.js

const fs = require('fs');
const path = require('path');
const schema = require('../server/graphql');
const graphql = require('graphql').graphql;
const introspectionQuery = require('graphql/utilities')
  .introspectionQuery;
const printSchema = require('graphql/utilities').printSchema;

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  const result = await graphql(schema, introspectionQuery);
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2),
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, './schema.json'),
      JSON.stringify(result, null, 2),
    );

    process.exit(0);
  }
})();

// Save user readable type system shorthand of schema
fs.writeFileSync(
  path.join(__dirname, '../src/schema.graphql'),
  printSchema(schema),
);
