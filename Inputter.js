import React, { Component } from 'react';

class Inputter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
      this.setState({name: event.target.value})
    }

    handleSubmit(event) {
      alert('This is a fake name submission!:', this.state.name);
      event.preventDefault();
    }

  render() {
    return (
      <div>
        <p>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="start typing" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </p>
      </div>
    );
  }
}

export default Inputter