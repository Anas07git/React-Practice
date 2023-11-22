import React, { Component } from 'react'

 class Rough extends Component {
  render() {
    const count = 0;
    return (
      <div>
        {count || <h1>Messages: {count}</h1>}
      </div>
    );
  }
}

export default Rough
