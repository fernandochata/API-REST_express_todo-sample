import { pool } from "../databases/db.postgresql.js"
import { validationResult } from "express-validator"

const HOST = process.env.PG_HOST || 'localhost'

export default { 
    // Get all tasks
    async getAll(req, res) {
        try {
            const tasks = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "count" : tasks.rowCount,
                "data": tasks.rows
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    },
    // Get task by id
    async getById(req, res) {
        try {
            const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [req.params.id])
            if (task.rowCount == 0) return res.status(204).json()
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": task.rows[0]
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })           
        }
    },
    // Create new task
    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const task = await pool.query("INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *", [req.body.title, req.body.description]);
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": task.rows[0]
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    },
    // Update task
    async update(req, res) {
        try {
            const task = await pool.query("UPDATE tasks SET title = $1, description = $2, status = $3, updatedAt = current_timestamp WHERE id = $4 RETURNING *", [req.body.title, req.body.description, req.body.status, req.params.id]);
            if (task.rowCount == 0) return res.status(204).json()
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": task.rows[0]
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    },
    // Delete task
    async delete(req, res) {
        try {
            const task = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [req.params.id]);
            if (task.rowCount == 0) return res.status(204).json()
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": task.rows[0]
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    }
}