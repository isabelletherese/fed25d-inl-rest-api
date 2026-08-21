import type { Request, Response } from 'express';
import { db } from '../config/db.js'
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const fetchAllCategories = async (req: Request, res: Response) => {
    try {
        const [result] = await db.query<RowDataPacket[]>(
            `SELECT * FROM categories`
        );

        res.json(result)

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}

export const FetchProductByCategory = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const [category] = await db.query<RowDataPacket[]>(
            `SELECT id, name
             FROM categories
             WHERE id = ?`,
            [id]
        )

        if (category.length === 0) {
            res.status(404).json({ error: 'Category not found' })
            return
        }

        const sql = `
            SELECT products. * 
            FROM products 
            JOIN product_category ON products.id = product_category.product_id
            WHERE product_category.category_id = ?`

        const [result] = await db.query<RowDataPacket[]>(sql, [id])

        res.json({
            category: category,
            products: result
        })

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }

}

export const createCategory = async (req: Request, res: Response) => {
    const categoryName = req.body.name

    if (categoryName === undefined) {
        res.status(400).json({ error: 'Name is required' })
        return
    }

    try {
        const sql = `
        INSERT INTO categories (name)
        VALUES (?)`

        const [result] = await db.query<ResultSetHeader>(sql, [categoryName])
        res.status(201).json({ message: 'Category created', result: { id: result.insertId, name: categoryName } })

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    const id = req.params.id
    const categoryName = req.body.name

    if (categoryName === undefined) {
        res.status(400).json({ error: 'Name is required' })
        return
    }

    try {
        const sql = `
            UPDATE categories
            SET name = ?
            WHERE id = ?
        `

        const [result] = await db.query<ResultSetHeader>(sql, [categoryName, id])

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Category not found" })
            return
        }

        res.status(200).json({ message: 'Category updated', result: { id, name: categoryName } })

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id    

    try {
        const sql = `
            DELETE FROM categories
            WHERE id = ?
        `

        const [result] = await db.query<ResultSetHeader>(sql, [id])

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Category not found" })
            return
        }

        res.status(200).json({ message: 'Category deleted', result: { id: id } })
        
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}