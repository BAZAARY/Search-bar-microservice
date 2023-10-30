const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./src/schema'); // Asegúrate de que esté apuntando al archivo correcto
const resolvers = require('./src/resolvers'); // Asegúrate de que esté apuntando al archivo correcto

const app = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

app.get('/', (req, res) => {
     res.redirect('/graphql');
  });
  

startApolloServer().then(() => {
  app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
});
