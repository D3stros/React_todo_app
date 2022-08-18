import React from 'react';

const Todo = ({ description, done }) => {
	const changeTodo = () => {
		done = !done;
	};

	return (
		<div>
			<div
				className={
					done
						? 'flex justify-between items-center p-2 bg-green-600 text-white'
						: 'flex justify-between items-center p-2 bg-red-500 text-white'
				}
			>
				<h1 className='text-lg cursor-pointer'>{description}</h1>
				<button className='text-lg bg-gray-400 p-2 text-white'>Delete</button>
			</div>
		</div>
	);
};

export default Todo;
