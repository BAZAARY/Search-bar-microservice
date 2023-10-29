import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { buildSubgraphSchema } from "@apollo/subgraph";
import http from "http";
import express from "express";
import cors from "cors";
import { typeDefs, resolvers } from "./src/configs/gateway.js";

const app = express();

app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const startApolloServer = async (app, httpServer) => {
	const server = new ApolloServer({
		schema: buildSubgraphSchema({ typeDefs, resolvers }),
		introspection: true,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();
	server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

app.listen(9000, () =>
	console.log("🚀 AUTHENTICATION Server ready at http://localhost:9000/graphql")
);