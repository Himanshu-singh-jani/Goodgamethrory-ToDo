import React from 'react';
import './index.css';

interface InputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="input-box"
      value={value}
      onChange={onChange}
      placeholder="Enter a task"
    />
  );
};

export default InputBox;
