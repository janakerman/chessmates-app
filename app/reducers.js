import apiService from './services/ApiService'

const initialState = {
    players: [],
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
        case 'SORT_PLAYERS':
            return {
                ...state,
                players: [...state.players].sort((a, b) => a.id < b.id ? -1 : 1)
            };
        default:
            return state;
    }
}

export const fetchPlayers = () =>  dispatch => {
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
