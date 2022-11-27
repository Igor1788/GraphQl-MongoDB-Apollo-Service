const Book = require('../models/Book');
const bookResolver = {
    Query: {
        books() {
            return Book.find();
        },
        book(_, { id }) {
            return Book.findById(id);
        },
    },
    Mutation: {
        createBook(_, { title, author, amount }) {
            const book = new Book({
                title,
                author,
                price: {
                    amount,
                },
            });
            return book.save();
        },
        updateBook(_, { id, books }) {
            return Book.findByIdAndUpdate(id, books, {
                new: true,
                useFindAndModify: false,
            });
        },
        deleteBook(_, { id }) {
            return Book.findByIdAndDelete(id, {
                useFindAndModify: false,
            });
        },
    }
};
export default bookResolver;
