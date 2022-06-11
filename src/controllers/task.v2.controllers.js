/**
 * * Postgresql Task Controller
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Object} next - Express Next Function
 * @returns {Object} - Express Response Object
 * @throws {Error} - Throws an error if the request is not valid
 * @throws {Error} - Throws an error if the request is not authenticated
 * @throws {Error} - Throws an error if the request is not authorized
 * @throws {Error} - Throws an error if the request is not found
 * @throws {Error} - Throws an error if the request is not updated
 * @throws {Error} - Throws an error if the request is not deleted
 * @throws {Error} - Throws an error if the request is not created
 */

import { pool } from "../databases/db.postgresql.js";
//import { Task } from "../models/task.v2.models.js";
import { validationResult } from "express-validator";

export default { 
    // Get all tasks
    async getAll(req, res) {
        const tasks = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
        return res.json(tasks.rows);
    },
    // Get task by id
    async getById(req, res) {
        const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [req.params.id]);
        return res.json(task.rows[0]);
    },
    // Create new task
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        const user = await pool.query("INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *", [req.body.title, req.body.description, req.body.status]);
        return res.json(user.rows[0]);
    },
    // Update task
    async update(req, res) {
        const task = await pool.query("UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *", [req.body.title, req.body.description, req.body.status, req.params.id]);
        return res.json(task.rows[0]);
    },
    // Delete task
    async delete(req, res) {
        const task = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [req.params.id]);
        return res.json(task.rows[0]);
    },
    // Get task info
    getInfo(req, res) {
        return res.json({message: "Task API v2"});
    }
}