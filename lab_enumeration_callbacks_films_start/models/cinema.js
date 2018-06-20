const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
};

Cinema.prototype.findFilmTitle = function (title) {
  const foundFilmByTitle = this.films.find((film) =>{
    return film.title === title;
  });
  return foundFilmByTitle;
};

Cinema.prototype.filmGenre = function (genre) {
  const foundGenres = [];

  for (const film of this.films) {
    if (film.genre === genre) {
      foundGenres.push(film);
    }
  }
  return foundGenres;
}

Cinema.prototype.findSomeByYear = function (year) {
  const foundByYear = [];

  for (const film of this.films) {
    if(film.year === year) {
      foundByYear.push(film);
    }
  }
  return foundByYear;
}



module.exports = Cinema;
