import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

async function startServer() {
   const app = express();
   const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
   });

   await apolloServer.start();
   apolloServer.applyMiddleware({ app });

   app.listen(4000, () => {
      console.log("Server is running on http://localhost:4000");
   });
}

startServer();
