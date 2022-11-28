import Book from '../models/Book';

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
        createBook(_, { book }) {
            const newBook = new Book(book);
            return newBook.save();
        },
        updateBook(_, { id, books }) {
            return Book.findByIdAndUpdate(id, books, {
                new: true,
                useFindAndModify: false,
            });
        },
    deleteBook(_, { id }) {
        return Book.findByIdAndRemove(id);
        }
    },
}

export default bookResolver