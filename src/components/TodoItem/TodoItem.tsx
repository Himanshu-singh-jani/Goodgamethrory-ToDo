import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import './index.css';

interface TodoItemProps {
  task: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <DeleteButton onClick={onDelete} />
    </div>
  );
};

export default TodoItem;
