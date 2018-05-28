// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import { bindActionCreators } from 'redux'
import MovieList from './MovieList';

const mapStateToProps = (state, ownProps) => {
  return {
     ownProps: state.ownProps
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    ownProps: ownProps
  }, dispatch)
};

const MovieListApp = connect (
  mapStateToProps,
  mapDispatchToProps
)
(MovieList);

export default MovieListApp;