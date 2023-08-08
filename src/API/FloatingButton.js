import React from 'react';
import './FloatingButton.css';
import { FiX, FiBell, FiMessageSquare } from "react-icons/fi";

const FloatingButton = ({ onClick }) => {
  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={onClick}>
      <FiMessageSquare className="floating-button-icon"/>
      </button>
    </div>
  );
};

export default FloatingButton;