import {combineReducers} from 'redux'

import fetchPlayersReducer from './fetchPlayersReducer'
import fetchGamesReducer from './fetchGamesReducer'

export default combineReducers({
  games: fetchGamesReducer,
  players: fetchPlayersReducer
});