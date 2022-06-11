import Task from '../models/task.v1.models.js';
import { validationResult  } from 'express-validator';

export default {
    // Get all tasks
    async getAll(req, res) {
        const tasks = await Task.find();
        return res.json(tasks);
    },
    // Get task by id
    async getById(req, res) {
        const task = await Task.findById(req.params.id);
        return res.json(task);
    },
    // Create new task
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        const task = new Task(req.body);
        await task.save();
        return res.json(task);
    },
    // Update task
    async update(req, res) {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(task);
    },
    // Delete task
    async delete(req, res) {
        const task = await Task.findByIdAndRemove(req.params.id);
        return res.json(task);
    },
    // Get info about task-app
    async getInfo(req, res) {
        res.send({message: 'Task-app v1 is running'});
    }
}