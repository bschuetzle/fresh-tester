import React, { Component } from 'react';

class Results extends Component {

  constructor(){
    super()
    this.state = {
      temp1: 'false',
      temp2: 0
    }

  }

  render() {
    if (this.props.display==="true") {
      console.log("results rendered")
      var diff = Math.abs(this.props.guess - this.props.rating);
      var msg = '';
      if (diff <= 5) {
        msg = 'Wow, you pretty much nailed it!'
      } else if (diff <= 15) {
        msg = 'Not too bad!'
      } else {
        msg = 'Sorry, not even close!'
      }
      return (
        <div className="Results-container">
            <p>You guessed {this.props.guess}%</p>
            <p>The actual Tomatometer percentage is {this.props.rating}%</p>
            <p>{msg}</p>
        </div>
      )

    } else {
      return (
        <div className="Results-container">
        </div>
      )
    }
  }
}

export default Results;
