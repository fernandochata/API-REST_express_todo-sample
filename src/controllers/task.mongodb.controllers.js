import Task from '../models/task.mongodb.models.js';
import { validationResult  } from 'express-validator';

const MONGO_HOST = process.env.MONGO_HOST || localhost

export default {
    // Get all tasks
    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            return res.status(200).json({
                "status": "OK",
                "count": Object.keys(tasks).length,
                "host": MONGO_HOST, 
                "data": tasks })
        } catch (error) {
            return res.status(500).json({"message": error.message})
        }
    },
    // Get task by id
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params.id);
            return res.status(200).json({
                "status": "OK",
                "data": task })
        } catch (error) {
            return res.status(500).json({"message": error.message})
        }
    },
    // Create new task
    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const task = new Task(req.body);
            await task.save();
            return res.status(201).json({
                "status": "OK",
                "data": task })
        } catch (error) {
            return res.status(500).json({"message": error.message})
        }
    },
    // Update task
    async update(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json({
                "status": "OK",
                "data": task })
        } catch (error) {
            return res.status(500).json({"message": error.message})
        }
    },
    // Delete task
    async delete(req, res) {
        try {
            const task = await Task.findByIdAndRemove(req.params.id);
            return res.json(task);
        } catch (error) {
            return res.status(500).json({"message": error.message})
        }
    }
}