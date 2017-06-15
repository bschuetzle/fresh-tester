import React, { Component } from 'react';
import Results from './Results.js';


class Guess extends Component {


  constructor(props){
    super(props)
    this.state = {
      displayResults: 'false',
      guess: 0
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onGuessClick = this.onGuessClick.bind(this);

  }


  onInputChange(event) {
    console.log('changing guess textbox')
    this.setState({
      guess: event.target.value
    })
  }

  onGuessClick(event) {
    console.log('clicked Go! button')
    this.setState({
      displayResults: 'true'
    })
    console.log("Display Results:", this.state.displayResults)
    console.log("Guess:", this.state.guess)
  }

  render() {
    if (this.props.display==="true") {
      return (
        <div className="Guess-container">
            <p>{this.props.description}</p>
            <p>What is your guess?</p>
            <input
              type='number'
              onChange={event => this.onInputChange(event)}
            />
            <input
              type='button'
              value='Go!'
              onClick={event => this.onGuessClick(event)}
            />
            <Results display={this.state.displayResults} guess={this.state.guess} rating={this.props.rating}/>
        </div>
      )

    } else {
      return (
        <div className="Guess-container">
        </div>
      )
    }
  }
}

export default Guess;
