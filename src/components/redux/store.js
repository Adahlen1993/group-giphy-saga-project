import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const allGifs = (state = [], action) => {
    return state;
}

const store = createStore(
    combineReducers({
      allGifs,
    }),
    applyMiddleware(logger)
  );

  export default store;