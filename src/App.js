import React from 'react';
import './App.css';
import RemainingCharacters from './RemainingCharacters';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <br />
        <RemainingCharacters max={10} text={this.state.name} />
      </div>
    );
  }
}
