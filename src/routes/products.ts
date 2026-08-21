import express from 'express'
import { createProduct, deleteProduct, fetchAllProducts, FetchProduct, updateProduct } from '../controllers/productController.js'
const router = express.Router()

router.get('/', fetchAllProducts)
router.get('/:id', FetchProduct)
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router