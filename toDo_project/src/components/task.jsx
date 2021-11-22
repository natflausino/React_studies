import React from 'react'
import {CgClose, CgInfo} from 'react-icons/cg'
import './css/task.css'

const Task = ( { task , handleTaskClick, handleTaskDel}) => {
	return (
		<>
			<div
				className="task-container"
				style={task.completed ? {borderLeft: "6px solid coral"} : {}}>
				<div className="task-title" onClick={() =>handleTaskClick(task.id)}>
					{task.title}
				</div>
				<div className="buttons-container">
					<button className="see-details-button" onClick={()=>handleTaskDel(task.id)}>
						<CgInfo />
					</button>
					<button className="remove-task-button" onClick={()=>handleTaskDel(task.id)}>
						<CgClose />
					</button>
				</div>
			</div>
		</>
	);
};

export default Task;