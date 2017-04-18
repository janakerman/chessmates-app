import React from 'react';
import {connect} from 'react-redux';

import {fetchGames} from '../../store/fetchGamesReducer';

class GamesList extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    if (this.props.hasErrored) {
      return (
        <div>
          <h1>Scott Logic Games</h1>
          <p>Sorry! There was an error loading games</p>
        </div>);
    }
    if (this.props.isLoading) {
      return (
        <div>
          <h1>Scott Logic Games</h1>
          <p>Loading…</p>
        </div>);
    }
    return (
      <div>
        <h1>Scott Logic Games</h1>
        <ul>
          {this.props.games.slice(0, 5).map((game) => (
            <li key={game.id}>
              <iframe width={600} height={397} frameBorder={0}
                      src={"https://lichess.org/embed/" + game.id + "?theme=auto&bg=auto"}></iframe>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    games: state.games.games,
    isLoading: state.games.isLoading,
    hasErrored: state.games.hasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
