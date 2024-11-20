import React from 'react';
import './goalProgress.css';

function GoalProgress() {
  const goals = [
    { label: 'Ingresos Anuales', progress: '$750.000.000', goal: '(CLP) $1.000.000.000', percentage: 80 },
    { label: 'Retención de Clientes', progress: 60, goal: '100%', percentage: 60 },
    { label: 'Meta de Nuevos Clientes', progress: '200', goal: 250, percentage: 70 },
  ];

  return (
    <div className="goal-progress-container">
      <div className="goal-progress-title">Metas y Progreso de Objetivos</div>
      {goals.map((goal, index) => (
        <div key={index} className="goal-item">
          <p className="goal-label">{goal.label}</p>
          <div className="goal-bar-background">
            <div className="goal-bar-progress" style={{ width: `${goal.percentage}%` }}></div>
          </div>
          <div className="goal-percentage">
            <div className='goal-percentage-item'>{goal.progress === 60 ? `${goal.progress}%` : `${goal.progress}`}</div>
            <div className='goal-percentage-item'>{goal.goal}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalProgress;
