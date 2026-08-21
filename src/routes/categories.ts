import express from 'express'
import { fetchAllCategories, FetchProductByCategory, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js'
const router = express.Router()

router.get('/', fetchAllCategories)
router.get('/:id/products', FetchProductByCategory)
router.post('/', createCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router