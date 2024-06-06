import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const allGifs = (state = [], action) => {
    return state;
}
const searchGifs = (state = [], action) => {
  if(action.type === 'SET_SEARCH' ) {
    return action.payload
  }
  return state;
}

function* fetchSearch() {
  try {
      const favoritesResponse = yield axios.get('/api/search');
      yield put({ type: 'FETCH_SEARCH', payload: favoritesResponse.data });
  } catch (error) {
      console.log('error fetching search', error);
  }
}

const store = createStore(
    combineReducers({
      allGifs,
      searchGifs,
    }),
    applyMiddleware(logger)
  );

  export default store;