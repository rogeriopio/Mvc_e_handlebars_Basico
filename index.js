import express from 'express';
import { engine, create } from 'express-handlebars';

// import conn from './db/conn.js';
import { sequelize as conn } from './db/conn.js';
import Task from './models/Task.js';

import { TaskController } from './controllers/TaskController.js';

console.log('TaskController: ', TaskController);

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
//midleware  para pegar o body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

conn.sync()
	.then(() => app.listen(port))
	.catch((err) => {});
