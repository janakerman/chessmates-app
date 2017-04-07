import React from 'react';

class TeamMembers extends React.Component {

    constructor() {
        super();
        this.state = {
            paginator: {
                currentPageResults: [],
            },
            hasErrored: false,
            isLoading: false
        };

        this.sortPlayers = this.sortPlayers.bind(this)
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({isLoading: true});
        fetch('https://en.lichess.org/api/user?team=scott-logic')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({isLoading: false});
                return response;
            })
            .then((response) => response.json())
            .then((response) => response.paginator)
            .then((paginator) => this.setState({ paginator }))
            .catch(() => this.setState({hasErrored: true}));
    }

    sortPlayers() {
        this.setState({
            paginator: {
                currentPageResults: this.state.paginator.currentPageResults.sort((a, b) => a.id < b.id ? -1 : 1)
            }
        })
    }


    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the players</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div>
                <h1>Scott Logic Team</h1>
                <ul>
                    {this.state.paginator.currentPageResults.map((player) => (
                        <li key={player.id}>
                            {player.id}
                        </li>
                    ))}
                </ul>
                <button onClick={this.sortPlayers}>Sort!</button>
            </div>
        )
    }

}


export default TeamMembers;
