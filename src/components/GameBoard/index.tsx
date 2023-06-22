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

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export default function GameBoard() {
  const [choices, setChoices] = useState<GridObj[]>(obj)
  const [turns, setTurns] = useState<number>(1)
  const [isFinished, setisFinished] = useState<boolean>(false)
  const [isTie, SetIsTie] = useState<boolean>(false)
  const dispatch = useDispatch()

  const checkWinningCondition = (choices: GridObj[]) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        choices[a].pattern !== 0 &&
        choices[a].pattern === choices[b].pattern &&
        choices[a].pattern === choices[c].pattern
      ) {
        return true;
      }
    }
    return false;
  };

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
    if (!isFinished) dispatch(changeTurn(turns))
  }, [turns, dispatch, isFinished])

  useEffect(() => {
    if (!choices.some(e => !e.selected)) SetIsTie(true)
    setisFinished(checkWinningCondition(choices))
  }, [choices])

  useEffect(() => {
    console.log(isFinished);
  }, [isFinished])

  return (
    <div className='board' >
      {choices.map(choice => (
        <div className="grid" key={choice.id} onClick={() => handleGridClick(choice.id)}>
          {choice.pattern === 1 ? < TripOriginIcon className='circle-icon' /> : ''}
          {choice.pattern === 2 ? < CloseIcon className='cross-icon' /> : ''}
        </div>
      ))}


      {isFinished ? <div>finished</div> : ''}
      {isTie ? <div>tie</div> : ''}
    </div>
  );
}
