import React, { Component } from 'react';
import MovieModel from '../models/MovieModel'
import Guess from './Guess.js';

class Search extends Component {

  constructor(){
    super()
    this.state = {
      searchText: '',
      movieWasFound: 'false'
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);

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
    this.setState({
      movieWasFound: 'false'
    })
    MovieModel.index().then( (res) => {
      console.log(res)
      for (var i = 0; i < res.length; i ++) {
        if (res[i].title === movie) {
          this.setState({
            movieWasFound: 'true',
            id: res[i].id,
            title: res[i].title,
            description: res[i].description,
            rating: res[i].rating
          })
          console.log("Movie was found:",this.state.movieWasFound)
          console.log("Movie title:",this.state.title)
          console.log("Movie description:",this.state.description)
          console.log("Movie rating:",this.state.rating)
        }
      }


    })


  }

  render() {
      return (
        <div>
          <p className="Search-header">
            Search a Movie and Guess the TOMATOMETER Rating!
          </p>
          <div className="Search-form">
            <input
              className="Title-search"
              type='text'
              placeholder='Enter a movie title'
              onChange={event => this.onInputChange(event)}
            />
            <input
              className="Search-button"
              type='button'
              value='Search'
              onClick={event => this.onSearchClick(event)}
            />
          </div>
          <Guess
            display={this.state.movieWasFound}
            title={this.state.title}
            description={this.state.description}
            rating={this.state.rating}
            />
        </div>
      );


  }
}

export default Search;
