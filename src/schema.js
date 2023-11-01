const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: Int!
  name: String!
  price: Int!
}

type Query {
  products: [Product]
}
`;

module.exports = typeDefs;
