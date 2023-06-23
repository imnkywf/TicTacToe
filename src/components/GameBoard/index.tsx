import React, { useState, useEffect } from 'react';
import './index.scss';

import { useDispatch } from 'react-redux';
// action
import { changeTurn } from '../Redux/action'

// MUI icons
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';

// import initial data
import { GridObj, obj, winningCombinations } from '../data'

import ScoreBoard from '../ScoreBoard';

export default function GameBoard() {
  const [choices, setChoices] = useState<GridObj[]>(obj)
  const [turns, setTurns] = useState<number>(1)
  const [isFinished, setisFinished] = useState<boolean>(false)
  const [isTie, setIsTie] = useState<boolean>(false)
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

  const restart = () => {
    setisFinished(false)
    setIsTie(false)
    setChoices(obj)
    setTurns(1)
  }

  useEffect(() => {
    if (!isFinished) dispatch(changeTurn(turns))
  }, [turns, dispatch, isFinished])

  useEffect(() => {
    if (!choices.some(e => !e.selected)) setIsTie(true)
    setisFinished(checkWinningCondition(choices))
  }, [choices])


  return (
    <div className='board' >
      {choices.map(choice => (
        <div className="grid" key={choice.id} onClick={() => handleGridClick(choice.id)}>
          {choice.pattern === 1 ? < TripOriginIcon className='circle-icon' /> : ''}
          {choice.pattern === 2 ? < CloseIcon className='cross-icon' /> : ''}
        </div>
      ))}

      {isFinished ? <ScoreBoard type={`User${turns === 1 ? 2 : 1} has won!`} restart={restart} /> : ''}
      {isTie ? <ScoreBoard type={'Tie'} restart={restart} /> : ''}
    </div>
  );
}
