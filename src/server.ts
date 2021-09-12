require("dotenv").config();
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const PORT = process.env.PORT || 8000;

const server = new ApolloServer({
  cors: { origin: "*" },
  resolvers,
  typeDefs,
});
server.listen(PORT).then(() => {
  console.log(`server listening on http://localhost:${PORT}`);
});
