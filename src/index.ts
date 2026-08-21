import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

import categoriesRouter from './routes/categories.js'
app.use('/categories', categoriesRouter)

import productsRouter from './routes/products.js'
app.use('/products', productsRouter)

import { connectToDatabase } from './config/db.js';
connectToDatabase();

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})