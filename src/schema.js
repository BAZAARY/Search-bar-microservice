const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    search(query: String!): [Product]
  }

  type Product {
    id: Int!
    name: String
    price: Int!
  }
`;

module.exports = typeDefs;
