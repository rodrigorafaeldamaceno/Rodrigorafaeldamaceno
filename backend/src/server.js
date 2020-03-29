const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers/resolvers')

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
})

server.start({ port: 3000 })
console.log('servidor online em http://localhost:3000/ ')