const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    search(query: String!): [SearchResult]
  }

  type SearchResult {
    id: ID!
    title: String
    # Otros campos de SearchResult
  }
`;

module.exports = typeDefs;
