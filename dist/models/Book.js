import { Schema } from 'mongoose';
const BookScheema = new Schema({
    title: String,
    author: {
        name: String
    },
    price: {
        amount: Number
    }
});
export default BookScheema;
