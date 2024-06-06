import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const allGifs = (state = [], action) => {
        if (action.type === 'SET_GIFS') {
            return action.payload;
        }
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


function* fetchGifsSaga() {
    try {
        const response = yield axios.get('/home');
        yield put({ type: 'SET_GIFS', payload: response.data });
      } catch (error) {
        console.log(`Error in FETCH saga`, error);
      }
    }



  function* rootSaga() {

    yield takeEvery('FETCH_GIFS', fetchGifsSaga);
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      combineReducers({
          allGifs,
          searchGifs,
        }),
        applyMiddleware(sagaMiddleware, logger)
    );
    sagaMiddleware.run(rootSaga);

  export default store;
