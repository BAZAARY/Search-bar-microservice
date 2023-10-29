const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const express= require('express');
const app = express();
const port= process.env.PORT || 3000;

app.listen(3000, () =>
	console.log("🚀 AUTHENTICATION Server ready at http://localhost:3000/graphql")
);