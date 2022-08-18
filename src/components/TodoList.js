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
