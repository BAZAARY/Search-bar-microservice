const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const exp = require('constants');

const express= require('express');
const app = express();
const port= process.env.PORT || 3000;

app.listen(port);

console.log('API gateway escuchando en el puerto: ' + port);