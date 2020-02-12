// const urlGetMovies = 'http://localhost:3000/movies';
const urlGetMovies = 'http://10.0.3.2:3000/movies';

function* getMoviesFromApi() {
  const response = yield fetch(urlGetMovies, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });
  const responseJson = yield response.json();
  console.log(responseJson);
  const movies = yield response.status === 200 ? responseJson : [];
  return movies;
}
export const Api = {
  getMoviesFromApi,
};
