import express from "express";
import { PORT, mongoURI } from './config.js'
import mongoose from "mongoose";
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors'

const app = express();
app.use(express.json());
// option 1 to use cors
app.use(cors());
// option 2 to use cors
// app.use(
//     cors({
//         origin: "http://localhost:5555",
//         methods: ['GET', 'POST', 'DELETE', 'PUT'],
//         allowedHeaders: ['Content-Type']
//     })
// )
app.get('/', (req,  res) => {
  // console.log(req)
  return res.status(234).send('Welcome To MERN  Tutorial');
});
app.use('/books', booksRoutes);

mongoose
.connect(mongoURI)
.then(() => {
  console.log('App Connected To DataBase');
  app.listen(PORT, () => {
    console.log(`App Is Listening To Port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
})
