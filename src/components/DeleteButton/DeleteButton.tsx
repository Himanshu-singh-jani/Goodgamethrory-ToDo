
import React from 'react';
import './index.css';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
