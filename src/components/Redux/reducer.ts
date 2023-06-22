import { Action as ActionInterface } from './action'
const initialState: number = 0

const turnReducer = (state: number = initialState, action: ActionInterface): number => {
  const { type, value } = action
  switch (type) {
    case 'changeTurn':
      return value
    default:
      return state
  }

}

export default turnReducer