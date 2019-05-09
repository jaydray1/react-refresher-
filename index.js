import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Inputter from './Inputter';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Refresher'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Inputter />
        <p>
          Front-end framework state manager!
        </p>
      </div>
    );
  }

}
render(<App />, document.getElementById('root'));
