import React, { useState, useEffect } from 'react';
import './index.scss';

import { useDispatch } from 'react-redux';
// action
import { changeTurn } from '../Redux/action'

// MUI icons
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';


interface GridObj {
  id: number;
  selected: boolean;
  pattern: number;
}

const obj: GridObj[] = [
  { id: 1, selected: false, pattern: 0 },
  { id: 2, selected: false, pattern: 0 },
  { id: 3, selected: false, pattern: 0 },
  { id: 4, selected: false, pattern: 0 },
  { id: 5, selected: false, pattern: 0 },
  { id: 6, selected: false, pattern: 0 },
  { id: 7, selected: false, pattern: 0 },
  { id: 8, selected: false, pattern: 0 },
  { id: 9, selected: false, pattern: 0 }
]

export default function GameBoard() {
  const [choices, setChoices] = useState<GridObj[]>(obj)
  const [turns, setTurns] = useState<number>(1)
  const dispatch = useDispatch()

  const handleGridClick = (id: number) => {
    if (choices.some(e => !e.selected)) {
      const updatedChoices = choices.map(choice =>
        choice.id === id && !choice.selected
          ? { ...choice, pattern: turns, selected: true }
          : choice
      )

      setChoices(updatedChoices)
      setTurns((p: number) => {
        if (p === 1) {
          return 2
        } else if (p === 2) {
          return 1
        }
        return p
      })
    }
  }

  useEffect(() => {
    dispatch(changeTurn(turns))
  }, [turns, dispatch])

  return (
    <div className='board' >
      {choices.map(choice => (
        <div className="grid" key={choice.id} onClick={() => handleGridClick(choice.id)}>
          {choice.pattern === 1 ? < TripOriginIcon className='circle-icon' /> : ''}
          {choice.pattern === 2 ? < CloseIcon className='cross-icon' /> : ''}
        </div>
      ))}
    </div>
  );
}
