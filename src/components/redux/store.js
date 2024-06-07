import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
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

function* fetchSearch(action) {
  try {
      const searchResponse = yield axios.get(`/api/search/${action.payload}`);
      yield put({ type: 'SET_SEARCH', payload: searchResponse.data });
  } catch (error) {
      console.log('error fetching search', error);
  }
}

function favoriteReducer(state = [], action) {
  if(action.type === 'SET_FAVORITE'){
    return action.payload
  }
  return state;
}

function* favoriteSaga(){
  try{
    const response = yield axios.get('/api/favorites');
    yield put ({ type: 'SET_FAVORITE', payload: response.data });
  } catch (error) {
    console.log(`Error in Favorite saga`, error);
  }
}

function* addFavoriteSaga(action) {
  try {
    yield console.log(action.payload);
    yield axios.post("/api/favorites", action.payload);
    
  } catch (error) {
    console.log("Error with Post:", error);
  }
}

function* fetchGifsSaga() {
    try {
        const response = yield axios.get('/api/home');
        yield put({ type: 'SET_GIFS', payload: response.data });
      } catch (error) {
        console.log(`Error in FETCH saga`, error);
      }
    }



  function* rootSaga() {
    yield takeLatest('FETCH_SEARCH', fetchSearch)
    yield takeEvery('FETCH_GIFS', fetchGifsSaga);
    yield takeLatest('FETCH_FAVORITE', favoriteSaga)
    yield takeLatest('ADD_FAVORITE', addFavoriteSaga)
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      combineReducers({
          allGifs,
          searchGifs,
          favoriteReducer,
        }),
        applyMiddleware(sagaMiddleware, logger)
    );
    sagaMiddleware.run(rootSaga);

  export default store;
