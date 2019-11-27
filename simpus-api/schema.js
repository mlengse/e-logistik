const { GraphQLSchema } = require('graphql');
const express = require('express');
const graphqlHTTP = require('express-graphql');
 
var options = {
//   exclude: ['bpjs_consciousness']
}
 
const { 
    // generateModelTypes, 
    generateSchema 
} = require('sequelize-graphql-schema')(options);
 
const models = require('./db.js');

const Schema = new GraphQLSchema(generateSchema(models))

// console.log(Schema)

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