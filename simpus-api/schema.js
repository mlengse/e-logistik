const { GraphQLSchema } = require('graphql');
const { generateSchema } = require('sequelize-graphql-schema')({});
const models = require('./db.js');
module.exports = new GraphQLSchema(generateSchema(models))