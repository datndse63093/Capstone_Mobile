import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';
import {
  addMovieAction,
  fetchMovieAction,
  fetchFailedAction,
  fetchSuccessAction,
} from '../actions/index';
const mapStateToProps = state => {
  return {
    movies: state.movieReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMovieAction());
    },
    onAddMovie: newMovie => {
      dispatch(addMovieAction(newMovie));
    },
  };
};

const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);
export default MovieContainer;
