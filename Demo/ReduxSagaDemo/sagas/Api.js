// const urlGetMovies = 'http://localhost:3000/movies';
const urlGetMovies = 'http://10.0.3.2:3000/movies';
const urlPostMovies = 'http://10.0.3.2:3000/movies';
const urlUpdateMovie = 'http://10.0.3.2:3000/movies';
const urlDeleteMovie = 'http://10.0.3.2:3000/movies';

function* getMoviesFromApi() {
  console.log('fetch movies by api');
  const response = yield fetch(urlGetMovies, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });
  const responseJson = yield response.json();
  const movies = yield response.status === 200 ? responseJson : [];
  return movies;
}

//send POST request to add new movie
function* insertNewMovieFromApi(newMovie) {
  console.log('insert movie by api');
  const response = yield fetch(urlPostMovies, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newMovie.name,
      releaseYear: newMovie.releaseYear,
    }),
  });
  yield console.log(`response = ${JSON.stringify(response)}`);
  return yield response.status === 201;
}

//send PUT request to update existing Movie
function* updateMovieFromApi(updatedMovie) {
  const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;
  const response = yield fetch(urlLink, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: updatedMovie.name,
      releaseYear: updatedMovie.releaseYear,
    }),
  });
  return yield response.status === 200; //true or false
}

//send DELETE request to update existing Movie
function* deleteMovieFromApi(deletedMovieId) {
  const urlLink = `${urlDeleteMovie}/${deletedMovieId}`;
  const response = yield fetch(urlLink, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
  return yield response.status === 200; //true or false
}

export const Api = {
  getMoviesFromApi,
  insertNewMovieFromApi,
  updateMovieFromApi,
  deleteMovieFromApi,
};
