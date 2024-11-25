
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './index.css';

interface TodoListProps {
  tasks: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;
