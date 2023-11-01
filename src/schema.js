const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: Int!
  name: String!
  descripcion: String
  price: Int!
  categoria: String

}

type Query {
  products: [Product]
}
`;

module.exports = typeDefs;
