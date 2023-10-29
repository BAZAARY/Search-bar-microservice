const { ApolloServer } = require('apollo-server-express');
const express = require('express');


const app = express();
const port= process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () =>
	console.log("🚀 AUTHENTICATION Server ready at http://localhost:3000")
);


