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
        <div>
          <RemainingCharacters max={10} text={this.state.name} />
        </div>
        <br />
        <RemainingCharacters max={10} text={this.state.name}>
          {
            (remainingCharacters) => {
              return (
                <p className={remainingCharacters < 0 ? "danger" : undefined}>
                  {remainingCharacters}
                </p>
              );
            }
          }
        </RemainingCharacters>
      </div>
    );
  }
}
