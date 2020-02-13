import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';
import {addMovieAction, fetchMovieAction} from '../actions/index';
const mapStateToProps = state => {
  console.log('mapStateToProps');
  return {
    movies: state.movieReducers,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps');
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
