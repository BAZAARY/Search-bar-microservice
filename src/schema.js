const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: Int!
  nombre: String!
  descripcion: String
  precio: Int!
  categoria: String

}

type Query {
  products: [Product]
}
`;

module.exports = typeDefs;
