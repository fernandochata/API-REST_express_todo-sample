import { conn } from "../databases/db.mysql.js"
import { validationResult } from "express-validator"

const HOST = process.env.MYSQL_HOST || 'localhost'

export default { 
    // Get all tasks
    async getAll(req, res) {
        try {
            const tasks = await conn.query("SELECT * FROM tasks ORDER BY id ASC;");
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "count" : tasks[0].length,
                "data": tasks[0]
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    },
    // Get task by id
    async getById(req, res) {
        try {
            const task = await conn.query(`SELECT * FROM tasks WHERE id = ${req.params.id};`)
            if (task[0].length == 0) return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": {}
            })
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": task[0][0]
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })           
        }
    },
    // Create new task
    async create(req, res) {
        try {
            const task = await conn.query(`INSERT INTO tasks (title, description) VALUES ('${req.body.title}', '${req.body.description}')`);
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": { "message": "Task created" }
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    },
    // Update task
    async update(req, res) {
        try {
            const task = await conn.query(`UPDATE tasks SET title = '${req.body.title}', description = '${req.body.description}', status = ${req.body.status}, updatedAt = CURRENT_TIMESTAMP WHERE id = '${req.params.id}'`);
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": { "message": "Task updated" }
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    },
    // Delete task
    async delete(req, res) {
        try {
            const task = await conn.query(`DELETE FROM tasks WHERE id = ${req.params.id}`);
            return res.status(200).json({
                "host": HOST,
                "status": "OK",
                "data": { "message": "Task deleted" }
            });
        } catch (error) {
            return res.status(500).json({ "error": error.message })
        }
    }
}