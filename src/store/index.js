import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../Demo/store/reducer'
import detailReducer from '../DemoDetail/store/reducer'

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer
})


export default createStore(reducer, applyMiddleware(thunk))
