import React from 'react';
import { connect } from 'react-redux';

import { fetchPlayers, sortPlayers } from '../../reducers';

class TeamMembers extends React.Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the players</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div>
                <h1>Scott Logic Team</h1>
                <ul>
                    {this.props.players.map((player) => (
                        <li key={player.id}>
                            {player.id}
                        </li>
                    ))}
                </ul>
                <button onClick={this.props.sortPlayers}>Sort!</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        players: state.players,
        isLoading: state.isLoading,
        hasErrored: state.hasErrored
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sortPlayers: () => dispatch(sortPlayers()),
        fetchPlayers: () => dispatch(fetchPlayers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembers);
