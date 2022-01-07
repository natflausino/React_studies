import React from 'react';
import Button from './button';

const TaskDetails = () => {
	return (
		<>
			<div className='back-button-container'>
					<Button>Voltar</Button>
			</div>
			<div className='task_details'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
		</>
	 );
}

export default TaskDetails;