
import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li className='flex items-center justify-between'>
      <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-lg items-center font-medium'>{task.title}</h5>
        <h6 className='text-lg items-center font-medium'>{task.desc}</h6>
      </div>
      <button
        onClick={onDelete}
        className='bg-red-400 mb-5 text-white px-4 py-2 rounded font-bold'
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
