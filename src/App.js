// @flow
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Form />
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}

export default App;
