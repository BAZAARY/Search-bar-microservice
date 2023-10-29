const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const PORT = 5000;

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}

startApolloServer().then(() => {
  app.listen(5000, () => {
    console.log(`🚀 AUTHENTICATION Server ready at http://localhost:5000/graphql`);
  });
});
