import mongoose from 'mongoose';
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    amount: Number
});
const BookWithScheema = mongoose.model('Book', BookSchema);
export default BookWithScheema;
