import React from 'react';
import './goalProgress.css';

function GoalProgress() {
  const goals = [
    { label: 'Ingresos Anuales', progress: 75, goal: '(CLP) $1.000.000.000' },
    { label: 'Retención de Clientes', progress: 60, goal: '100%' },
    { label: 'Meta de Nuevos Clientes', progress: 85, goal: 250 },
  ];

  return (
    <div className="goal-progress-container">
      <div className="goal-progress-title">Metas y Progreso de Objetivos</div>
      {goals.map((goal, index) => (
        <div key={index} className="goal-item">
          <p className="goal-label">{goal.label}</p>
          <div className="goal-bar-background">
            <div className="goal-bar-progress" style={{ width: `${goal.progress}%` }}></div>
          </div>
          <div className="goal-percentage">
            <div className='goal-percentage-item'>{goal.progress}%</div>
            <div className='goal-percentage-item'>{goal.goal}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalProgress;
