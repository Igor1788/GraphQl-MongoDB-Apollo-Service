import { gql } from 'apollo-server';
const query = gql `
    type Query {
        books: [Book],
        book(id: ID!): Book
    }
`;
export default query;
