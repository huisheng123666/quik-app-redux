import * as constans from './constans'

const defaultState = {
  a: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.INCREASE_A:
      return {...state, a: state.a + 1}
    default:
      return state
  }
}
