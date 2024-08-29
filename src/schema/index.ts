import { gql } from "apollo-server-express";

export const typeDefs = gql`
   type Query {
      getUser(id: ID!): User
      getUsers(count: Int!): [User!]!
   }
   type User {
      id: ID!
      name: String!
      email: String!
   }
`;
