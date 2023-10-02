'use client'
import React, { useState, useEffect } from 'react';
import TaskForm from '@/Components/TaskForm';
import TaskList from '@/Components/TaskList';
import Header from '@/Components/Header';


const Kashif = () => {
  const [mainTask, setMainTask] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    setMainTask(storedTasks)
  },[]);
  
  
const handleAddTask = (newTask) => {
  setMainTask((prevTasks) => [...prevTasks, newTask]);
  localStorage.setItem('tasks', JSON.stringify([...mainTask, newTask]));
};


  const handleDeleteTask = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);

    localStorage.setItem('tasks', JSON.stringify(copyTask));
  };

  return (
    <>
      <Header/>
      <TaskForm onSubmit={handleAddTask} />

      <hr />

      <div className='p-8 bg-slate-200'>
        <TaskList tasks={mainTask} onDelete={handleDeleteTask} />
      </div>
    </>
  );
};

export default Kashif;
