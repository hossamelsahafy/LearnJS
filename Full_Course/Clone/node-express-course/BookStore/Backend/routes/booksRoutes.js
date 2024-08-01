import express from "express";
import { Book } from '../models/bookModel.js'
import {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
} from '../controller/booksController.js'

const router = express.Router();

router.post('/', createBook)

router.get('/', getAllBooks)

router.get('/:id', getBookById);

router.put('/:id', updateBook)

router.delete('/:id', deleteBook);

export default router;
