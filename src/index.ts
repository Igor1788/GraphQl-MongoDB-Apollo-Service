import process from 'node:process'
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server' ;   
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typeDefs';
import resolvers from './resolvers';


// Database
const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME,
};

const dbUri = "mongodb+srv://igor1788:<password>@cluster0.nd1lrpd.mongodb.net/?retryWrites=true&w=majority";
// const dbOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// };

mongoose
  .connect(dbUri)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Databased failed: ", error));

// GraphQL
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`🚀 Server listening at: ${url}`);