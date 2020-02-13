import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';
import {
  addMovieAction,
  fetchMovieAction,
  updateItemAction,
  updateItemSuccessAction,
  deleteItemAction,
} from '../actions/index';
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
    onUpdateItemAction: updatedMovie => {
      dispatch(updateItemAction(updatedMovie));
    },
    //delete a movie
    onDeleteItemAction: deletedMovieId => {
      dispatch(deleteItemAction(deletedMovieId));
    },
    //Not necessary !
    // onUpdateItemSuccessAction: updatedMovie => {
    //   dispatch(updateItemSuccessAction(updatedMovie));
    // },
  };
};

const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);

export default MovieContainer;
