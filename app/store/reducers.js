import {combineReducers} from 'redux'

import fetchPlayersReducer from './fetchPlayersReducer'
import fetchGamesReducer from './fetchGamesReducer'

export default combineReducers({
    fetchGamesReducer: fetchGamesReducer,
    fetchPlayersReducer: fetchPlayersReducer
  });