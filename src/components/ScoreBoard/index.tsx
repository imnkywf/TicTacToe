import React, { FC } from 'react';
import './index.scss';

interface ScoreBoardProps {
  type: string;
  restart: () => void
}

const ScoreBoard: FC<ScoreBoardProps> = ({ type, restart }) => {
  const handleRestart = () => {
    restart()
  }
  return (
    <div className='scoreBoard'>
      <div className="title">
        <h1>{type}</h1>
      </div>

      <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default ScoreBoard;
