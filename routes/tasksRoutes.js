import express from 'express';
import { TaskController } from '../controllers/TaskController.js';
export const router = express.Router();

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);

router.get('/edit/:id', TaskController.updateTask);

router.post('/edit', TaskController.updateTaskPost);

router.post('/remove', TaskController.removeTask);

router.get('/', TaskController.showTasks);
