import mongoose from "mongoose";
const BookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
  }, {
    timestamps: true
});

export const Book = mongoose.model('Book', BookSchema);
