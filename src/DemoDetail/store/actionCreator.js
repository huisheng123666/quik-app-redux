import { CHANGE_B } from './constans'

export const changeB = (b) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: CHANGE_B, b})
    }, 1000)
  }
}
