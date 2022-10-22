import express from 'express';
import { engine, create } from 'express-handlebars';

// import conn from './db/conn.js';
import { sequelize as conn } from './db/conn.js';
import Task from './models/Task.js';

import { router as tasksRoutes } from './routes/tasksRoutes.js';

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
//midleware  para pegar o body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn.sync()
	.then(() => app.listen(port))
	.catch((err) => {});
