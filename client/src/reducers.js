import { combineReducers } from 'redux';

const displayedTweets = (state = {handle: null}, action) => {
  return state;
}

const rootReducer = combineReducers({
  displayedTweets
})

export default rootReducer;