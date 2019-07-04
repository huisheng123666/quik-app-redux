import * as constans from './constans'

const defaultState = {
  b: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.CHANGE_B:
      return {...state, b: action.b}
    default:
      return state
  }
}
