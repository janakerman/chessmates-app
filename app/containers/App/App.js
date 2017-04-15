import React from 'react';
// TODO: look at absolute imports
import TeamMembers from '../../containers/TeamMembers';
import GamesList from '../../containers/GamesList';

class App extends React.Component {

  render() {
    return (
      <div>
        <div style={leftColumnStyle}>
          <GamesList />
        </div>
        <div style={rightColumnStyle}>
          <TeamMembers />
        </div>
      </div>);
  }
}

const leftColumnStyle = {
  float: "left",
};

const rightColumnStyle = {
  float: "right",
};


export default App;
