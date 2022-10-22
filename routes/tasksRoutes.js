import express from 'express';
import { TaskController } from '../controllers/TaskController.js';
export const routerTeste = express.Router();

routerTeste.get('/add', TaskController.createTask);
routerTeste.get('/', TaskController.showTasks);
