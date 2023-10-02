// KashifForm.js
import React, { useState } from 'react';

const taskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter title here'
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter description here'
      />
      <button onClick={handleSubmit} className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>
        Add Task
      </button>
    </form>
  );
};

export default taskForm;
