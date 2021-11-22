import React from 'react'
import Task from './task'

const Tasks = ({ tasks , handleTaskClick, handleTaskDel}) => {
  return (
    <>
      {tasks.map(task => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDel={handleTaskDel}
        />
      ))}
    </>
  )
}

export default Tasks
