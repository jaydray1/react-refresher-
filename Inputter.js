import React, { Component } from 'react';
import styled from 'styled-components';

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
            <Input placeholder="Start typing" onChange={this.handleChange} />
            <Button type="submit" value="Submit">Submit</Button>
          </form>
        </p>
      </div>
    );
  }
}

const Input = styled.input`
  color: red;
  border: none;
  height: 20px;
  border-radius: 5px;
  border: 1px solid blue;
  `;

  const Button = styled.button`
    background-color: yellow;
    margin-left: 2em;
    border-radius 5px;

  `

export default Inputter