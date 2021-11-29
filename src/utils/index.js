const movieArray = [];

class Movie {
  constructor(title, actor, location) {
    this.title = title;
    this.actor = actor;
    this.location = location;
  }

  add() {
    movieArray.push(this);
  }
}

module.exports = { Movie, movieArray };
