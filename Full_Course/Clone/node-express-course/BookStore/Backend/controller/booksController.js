import { Book } from '../models/bookModel.js';

export const createBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).send({ message: "Send All Required Fields: title, author, publishYear" });
        }
        const newBook = { title, author, publishYear };
        const book = await Book.create(newBook);
        res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ count: books.length, data: books });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book Not Found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).send({ message: "Send All Required Fields: title, author, publishYear" });
        }
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true });
        if (!updatedBook) {
            return res.status(404).send({ message: "Book Not Found" });
        }
        res.status(200).send({ message: "Book Was Updated Successfully", data: updatedBook });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).send({ message: "Book Not Found" });
        }
        res.status(200).send({ message: "Book Was Deleted Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};
