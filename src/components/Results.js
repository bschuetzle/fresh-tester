import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import popcorn from '../popcorn.png';

class Results extends Component {

  constructor(){
    super()
    this.state = {
      temp1: 'false',
      temp2: 0
    }
    this.displayRating = this.displayRating.bind(this);
  }

  componentDidMount(){
    this.displayRating();
  }

  componentDidUpdate(){
    this.displayRating();
  }


  displayRating() {
    const el = findDOMNode(this.refs.ratingCounter);
    const msgEl = findDOMNode(this.refs.finalMsg);
    const imgEl = findDOMNode(this.refs.popcorn);

    var diff = Math.abs(this.props.guess - this.props.rating);
    var msg = '';
    if (diff <= 5) {
      msg = 'Wow, you pretty much nailed it!'
    } else if (diff <= 15) {
      msg = 'Not too bad!'
    } else {
      msg = 'Sorry, not even close!'
    }

    $(el).each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 2000,
        easing:'swing',
        step: function() {
          $this.text(Math.floor(this.countNum) + '%');
        },
        complete: function() {
          $this.text(this.countNum + '%');
          $(msgEl).text(msg);
        }
      });
    });
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
            <p className="Guess-result-msg1">You guessed {this.props.guess}%</p>
            <p className="Guess-result-msg1">The actual TOMATOMETER rating is - wait for it...</p>
            <div className="Results-inner-container">
                <img className="Popcorn" ref="popcorn" src={popcorn} />
                <h2 className="Counter" ref="ratingCounter" data-count={this.props.rating}>0%</h2>
            </div>
            <p className="Guess-result-msg2" ref="finalMsg"></p>
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
