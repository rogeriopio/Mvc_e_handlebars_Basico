import { DataTypes } from 'sequelize';
import { sequelize as db } from '../db/conn.js';
//import db from '../db/conn.js';

const Task = db.define('Task', {
	title: {
		type: DataTypes.STRING,
		required: true,
	},
	description: {
		type: DataTypes.STRING,
		required: true,
	},
	done: {
		type: DataTypes.BOOLEAN,
		required: true,
	},
});

export default Task;
//module.exports =Task
