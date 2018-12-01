import React, { Component } from 'react';
// import getHeroesByPlayer from '../requests/getHeroesByPlayer';

class PlayerHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Player Heroes"/>
      </div>
    );
  }
}

export default PlayerHeroes;