const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: Int!
  nombre: String
  descripcion: String
  precio: Float
  # Otros campos de producto
}

type Query {
  products: [Product]
}
`;

module.exports = typeDefs;
