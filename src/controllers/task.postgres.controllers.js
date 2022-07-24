import { pool } from "../databases/db.postgresql.js";
import { validationResult } from "express-validator";

export default { 
    // Get all tasks
    async getAll(req, res) {
        try {
            const tasks = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
            return res.json(tasks.rows);
        } catch (error) {
            console.log(error);
        }
    },
    // Get task by id
    async getById(req, res) {
        try {
            const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [req.params.id]);
            return res.json(task.rows[0]);
        } catch (error) {
            console.log(error);            
        }
    },
    // Create new task
    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
            const user = await pool.query("INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *", [req.body.title, req.body.description, req.body.status]);
            return res.json(user.rows[0]);
        } catch (error) {
            console.log(error);
        }
    },
    // Update task
    async update(req, res) {
        try {
            const task = await pool.query("UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *", [req.body.title, req.body.description, req.body.status, req.params.id]);
            return res.json(task.rows[0]);
        } catch (error) {
            console.log(error);
        }
    },
    // Delete task
    async delete(req, res) {
        try {
            const task = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [req.params.id]);
            return res.json(task.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}