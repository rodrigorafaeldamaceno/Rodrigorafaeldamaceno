const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers/resolvers')
const port = process.env.PORT || 3000;


const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
})

server.start({ port })
// console.log('servidor online em http://localhost:3000/ ')