import React from 'react';
import './index.css';

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      Add
    </button>
  );
};

export default AddButton;
