const express = require('express');
const graphqlHTTP = require('express-graphql');
 
const Schema = require('./simpus-api/schema')
const app = express();
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
)
 
app.listen(8080, function() {
  console.log('RUNNING ON 8080. Graphiql http://localhost:8080/graphql')
})