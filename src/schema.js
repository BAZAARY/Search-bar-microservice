const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: ID!
  nombre: String!
  descripcion: String
  precio: Float!
  categoria: String

}

type Query {
  products: [Product]
}
`;

module.exports = typeDefs;
