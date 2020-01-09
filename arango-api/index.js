const fs = require('fs')
const Arango = require('./arango')

const { ApolloServer, gql } = require('apollo-server-express')

const arango = new Arango({
  host: process.env.ARANGODB_HOST,
  port: process.env.ARANGODB_PORT,
  database: process.env.ARANGODB_DB,
  dbUsername: process.env.ARANGODB_USERNAME,
  dbPassword: process.env.ARANGODB_PASSWORD
})

const typeDefs = gql(fs.readFileSync(__dirname.concat('/schema.gql'), 'utf8'))

const resolvers = {
  Query: {
    rekapObat: async (_, {_key}) => (await arango.queryCol('rekapObat', `FOR r IN rekapObat FILTER r._key == '${_key}' RETURN r`)).map(e => Object.assign(e, {
      recipes: Object.keys(e.recipes).map( rec => ({
        id: rec,
        jml: e.recipes[rec]
      }))
    })),
    obatMasuk: async (_) => (await arango.queryCol('terimaObat', `FOR t IN terimaObat RETURN t`))
  },

  Mutation: {
    terimaObat: async ( _, input ) => Object.assign( input, await arango.upsert('terimaObat', input ) ),
    hapusObat: async ( _, { _key } ) => ({ _key: await (arango.collection('terimaObat')).remove(_key) })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
 
module.exports = app => server.applyMiddleware({ app });
