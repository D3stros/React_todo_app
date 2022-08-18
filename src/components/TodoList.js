import React from 'react';
import Todo from './Todo';

const todos = [
	{ description: 'Shopping', done: false },
	{ description: 'Sport', done: false },
	{ description: 'Programming', done: false },
];

const TodoList = () => {
	return (
		<div>
			<h1>Our todos</h1>
			<Todo></Todo>
			<Todo></Todo>
			<Todo></Todo>
		</div>
	);
};

export default TodoList;
