import Task from '../models/Task.js';

export class TaskController {
	constructor() {}
	//sem precisar instanciar os metodos usa estatico
	static createTask(req, res) {
		res.render('tasks/create');
	}
	static showTasks(req, res) {
		res.render('tasks/all');
	}
}
