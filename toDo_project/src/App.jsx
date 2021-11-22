import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Tasks from './components/tasks';
import AddTask from './components/addTask';
import './App.css'

const App = () => {
  // const message = 'To-Do List!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false,
    },
    {
      id: '2',
      title: 'Regar as flores',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(tasks => {
      if (tasks.id == taskId)
        return {... tasks, completed: !tasks.completed}
      return tasks;
    })

    setTasks(newTasks);
  };

  const handleTaskAdd = (taskTitle) => {
    const newTask = [... tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false,
    }];

    setTasks(newTask);
  };

  const handleTaskDel = (taskId) => {
    const newTask = tasks.filter(task => task.id != taskId)

    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">To-Do</h1>
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDel={handleTaskDel}
        />
      </div>
    </>
  );
};

export default App;