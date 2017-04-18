import apiService from '../services/ApiService'

const initialState = {
  games: [],
  hasErrored: false,
  isLoading: false
};

export default function fetchGamesReducer(state = initialState, action) {
  switch (action.type) {
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
    case 'FETCH_PLAYERS_ERROR':
      return {
        ...state,
        isLoading: false,
        hasErrored: true
      };
    default:
      return state;
  }
}

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
    });
};