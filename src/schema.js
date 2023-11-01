const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: Int!
    name: String!
    price: Int!
  }

  type Query {
    products(name_contains: String): [Product]
  }
`;

module.exports = typeDefs;
