import type { Request, Response } from 'express';
import { db } from '../config/db.js'
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const fetchAllProducts = async (req: Request, res: Response) => {
    const search = req.query.search
    const sort = req.query.sort

    try {
        let sql = `SELECT * FROM products`
        let params: string[] = [];

        if (search) {
            sql += ` WHERE title LIKE ?`
            params = [`%${search}%`]
        }

        if (sort && sort === 'asc') {
            sql += ` ORDER BY price ASC`
        } else if (sort && sort === 'desc') {
            sql += ` ORDER BY price DESC`
        }

        const [result] = await db.query<RowDataPacket[]>(sql, params);
        res.json(result)

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}

export const FetchProduct = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
    SELECT * FROM products
    WHERE id = ?
    `
        const [result] = await db.query<RowDataPacket[]>(sql, [id])

        if (result.length === 0) {
            res.status(404).json({ error: 'Product not found' })
            return
        }
        res.json(result[0])

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const { title, description, stock, price, image } = req.body

    if (title === undefined || description === undefined || stock === undefined || price === undefined) {
        res.status(400).json({ error: 'title, description, stock and price are required' })
        return
    }

    try {
        const sql = `
    INSERT INTO products (title, description, stock, price, image)
   VALUES (?, ?, ?, ?, ?)
   `
        const [result] = await db.query<ResultSetHeader>(sql, [title, description, stock, price, image])

        res.status(201).json({ message: 'Product created', result: { id: result.insertId, name: title, description: description, stock: stock, price: price, image: image ?? null } })

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id as string
    const { title, description, stock, price, image } = req.body

    const updateFields: string[] = []
    const values: (string | number)[] = []

    if (title !== undefined) {
        updateFields.push(`title = ?`)
        values.push(title)
    }
    if (description !== undefined) {
        updateFields.push(`description = ?`)
        values.push(description)
    }
    if (stock !== undefined) {
        updateFields.push(`stock = ?`)
        values.push(stock)
    }
    if (price !== undefined) {
        updateFields.push(`price = ?`)
        values.push(price)
    }
    if (image !== undefined) {
        updateFields.push(`image = ?`)
        values.push(image)
    }

    if (updateFields.length === 0) {
        res.status(400).json({ error: 'No field to update' })
        return
    }

    try {
        const sql = `
            UPDATE products
            SET ${updateFields.join(', ')}
            WHERE id = ?
        `

        values.push(id)

        const [result] = await db.query<ResultSetHeader>(sql, values)

        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' })
            return
        }

        const [updatedProduct] = await db.query<RowDataPacket[]>(
            'SELECT * FROM products WHERE id = ?',
            [id]
        )

        res.status(200).json({ message: 'Product updated', result: updatedProduct[0]})

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }

}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
    DELETE FROM products
    WHERE id = ?
    `
        const [result] = await db.query<ResultSetHeader>(sql, [id])

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Product not found" })
            return
        }
        res.status(200).json({ message: 'Product deleted', deletedProduct: { id: id } })

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ error: message })
    }
}