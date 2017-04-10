import React from 'react';
// TODO: look at absolute imports
import TeamMembers from '../../containers/TeamMembers';
import GamesList from '../../containers/GamesList';

class App extends React.Component {
  render() {
    return (
      <div>
        <TeamMembers />
        <GamesList/>
      </div>);
  }
}


export default App;
