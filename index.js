require('dotenv').config()
const graphqlHTTP = require('express-graphql');
const app = (require('express'))();
const schema = require('./simpus-api/schema')
const arangoAPI = require('./arango-api')

app.use( '/graphiql', graphqlHTTP({
  schema,
  graphiql: true
}))
 
arangoAPI(app)

app.listen(8080, () => console.log('RUNNING ON 8080. Graphiql http://localhost:8080'))