import React, { Component } from 'react';
import MovieModel from '../models/MovieModel'

class Search extends Component {

  constructor(){
    super()
    this.state = {
      searchText: ''
    }
  }

  onInputChange(event) {
    console.log('changing search textbox')
    this.setState({
      searchText: event.target.value
    })
  }

  onSearchClick(event) {
    console.log('search button clicked')
    console.log("Search Text=",this.state.searchText)
    var movie = this.state.searchText;
    MovieModel.index().then( (res) => {
      console.log(res)
      res.forEach(function(element,index) {
        if (element.title === movie) {
          console.log("title:", element.title)
          console.log("rating:", element.rating)
          console.log("imageURL:", element.imageURL)
        }
      })
    })
  }

  render() {
    return (
      <div>
        <p className="Search-header">
          Guess The TomatoMeter!
        </p>
        <div className="Search-form">
          <input
            type='text'
            placeholder='Enter a movie title'
            onChange={event => this.onInputChange(event)}
          />
          <input
            type='button'
            value='Search'
            onClick={event => this.onSearchClick(event)}
          />
        </div>

        

      </div>
    );
  }
}

export default Search;
