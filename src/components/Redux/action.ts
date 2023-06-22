export interface Action {
  type: string
  value: number
}
export const changeTurn = (turn: number): Action => ({ type: 'changeTurn', value: turn })