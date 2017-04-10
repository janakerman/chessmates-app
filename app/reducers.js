import apiService from './services/ApiService'

const initialState = {
  players: [],
  games: [],
  hasErrored: false,
  isLoading: false
};

// Top level reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_PLAYERS_COMPLETE':
      return {
        ...state,
        isLoading: false,
        players: action.payload
      };
    case 'FETCH_PLAYERS_ERROR':
      return {
        ...state,
        isLoading: false,
        hasErrored: true
      };
    case 'FETCH_GAMES':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_GAMES_COMPLETE':
      return {
        ...state,
        isLoading: false,
        games: action.payload
      };
    case 'FETCH_GAMES_ERROR':
      return {
        ...state,
        isLoading: false,
        hasErrored: true
      };
    case 'SORT_PLAYERS':
      return {
        ...state,
        players: [...state.players].sort((a, b) => a.id < b.id ? -1 : 1)
      };
    default:
      return state;
  }
}

export const fetchPlayers = () => dispatch => {
  dispatch({
    type: 'FETCH_PLAYERS'
  });

  return apiService.fetchPlayers()
    .then(players => {
      dispatch({
        type: 'FETCH_PLAYERS_COMPLETE',
        payload: players
      })
    })
};

export const fetchGames = () => dispatch => {
  dispatch({
    type: 'FETCH_GAMES'
  });

  return apiService.fetchGames()
    .then(games => {
      dispatch({
        type: 'FETCH_GAMES_COMPLETE',
        payload: games
      })
    })
};

export const sortPlayers = () => ({
  type: 'SORT_PLAYERS'
});