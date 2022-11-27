const {gql} = require('apollo-server');

const types = gql`
    type Book {
        id: ID!,
        title: String!,
        author: Author,
        price: Price
    }

    type Author {
        name: String,
        books: [Book]
    }

    type Price {
        amount: Float,
        books: [Book]
    }
`;

export default types;


