import React from 'react';
import Todo from './Todo';
import { useState, useEffect } from 'react';

const todos = [
	{ description: 'Shopping', done: true },
	{ description: 'Sport', done: false },
	{ description: 'Programming', done: false },
];

const TodoList = () => {
	const [opencount, countOpenTodos] = useState(0);

	const countOpen = () => {
		const donetodos = todos.filter((item) => {
			return !item.done;
		});
		countOpenTodos(donetodos.length);
	};

	useEffect(() => {
		countOpen();
	}, [opencount]);

	return (
		<div className='shadow-sm hover:shadow-lg'>
			<div className='text-center bg-gray-900 text-white text-3xl py-4 font-semibold'>
				<h1>Our todos</h1>
				<h2>Open todos: {opencount}</h2>
			</div>
			{todos.map((item, index) => {
				return (
					<Todo
						description={item.description}
						done={item.done}
						key={index}
					></Todo>
				);
			})}
		</div>
	);
};

export default TodoList;
