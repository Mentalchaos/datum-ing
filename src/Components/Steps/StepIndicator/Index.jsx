import React from 'react';
import './stepIndicator.css';
import { FaHome, FaUser, FaCog, FaMap, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const StepIndicator = ({ actualStep, isCompleted }) => {
  const stepsIcons = [
    <FaHome />,
    <FaUser />,
    <FaCog />,
    <FaMap />,
    <FaFileAlt />,
    <FaCheckCircle />,
  ];

  return (
    <div className="step-indicator">
      {stepsIcons.map((icon, index) => (
        <div
          key={index}
          className={`step ${
            index < actualStep || (index === actualStep && isCompleted) ? 'active' : ''
          }`}
        >
          <div className="icon">{icon}</div>
          {index < stepsIcons.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
