const { gql } = require('apollo-server');

const mutation = gql`
    type Mutation {
        createBook(title: String!, author: String!, amount: Float!): Book
        updateBook(id: ID!, title: String!, author: String!, amount: Float!): Book
        deleteBook(id: ID!): Book
    }

    input BookInput {
        name: String,
        author: AuthorInput,
        price: PriceInput
    }
    input AuthorInput {
        name: String
    }
    input PriceInput {
        amount: Float
    }
`;

export default mutation;