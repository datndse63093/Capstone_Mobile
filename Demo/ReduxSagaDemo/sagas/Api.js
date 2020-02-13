// const urlGetMovies = 'http://localhost:3000/movies';
const urlGetMovies = 'http://10.0.3.2:3000/movies';
const urlPostMovies = 'http://10.0.3.2:3000/movies';

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

export const Api = {
  getMoviesFromApi,
  insertNewMovieFromApi,
};
