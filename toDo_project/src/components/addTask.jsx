import React, { useState } from 'react';
import Button from './button';
import './css/addTask.css'

const AddTask = ({ handleTaskAdd }) => {
	const [input, setInputData] = useState('')

	const handleInputChange = (e) => {
		setInputData(e.target.value);
	};

	const handleAddClick = () => {
		handleTaskAdd(input);
		setInputData("");
	};

	return (
		<div className='add-task-container'>
			<input
				onChange={handleInputChange}
				value={input}
				className='add-task-input'
				type="text"
			/>;
			<div className='add-button-conteiner'>
				<Button onClick={handleAddClick}>Adicionar</Button>
			</div>
		</div>
	);
}

export default AddTask;