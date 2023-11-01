const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    price: Float
    # Otros campos de producto
  }

  type Query {
    products: [Product]
  }
`;

module.exports = { typeDefs };
