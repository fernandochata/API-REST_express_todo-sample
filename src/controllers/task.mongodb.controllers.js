import Task from '../models/task.v1.models.js';
import { validationResult  } from 'express-validator';

export default {
    // Get all tasks
    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            return res.json(tasks);
        } catch (error) {
            console.log(error);
        }
    },
    // Get task by idrs
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params.id);
            return res.json(task);
        } catch (error) {
            console.log(error);
        }
    },
    // Create new task
    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
            const task = new Task(req.body);
            await task.save();
            return res.json(task);
        } catch (error) {
            console.log(error);
        }
    },
    // Update task
    async update(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(task);
        } catch (error) {
            console.log(error);
        }
    },
    // Delete task
    async delete(req, res) {
        try {
            const task = await Task.findByIdAndRemove(req.params.id);
            return res.json(task);
        } catch (error) {
            console.log(error);
        }
    }
}