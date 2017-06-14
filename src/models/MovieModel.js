import $ from 'jquery-ajax'

class MovieModel {

  static index(){
    let request = $.ajax({
      url: "https://freshtest-c40d1.firebaseio.com/movies.json",
      method: 'GET'
    })
    return request
  }

}

export default MovieModel
