import React, { useState } from 'react';
import AddButton from './components/AddButton/AddButton';
import InputBox from './components/InputBox/InputBox';
import TodoList from './components/TodoList/TodoList';
import './index.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <div className="input-container">
        <InputBox value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <AddButton onClick={handleAddTask} />
      </div>
      <TodoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
