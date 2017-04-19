import {combineReducers} from 'redux'

import fetchPlayersReducer from './fetchPlayersReducer'
import fetchGamesReducer from './fetchGamesReducer'

const rootReducer = combineReducers({
  games: fetchGamesReducer,
  players: fetchPlayersReducer
});

export default rootReducer;