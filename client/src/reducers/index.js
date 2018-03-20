import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import books from './bookReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  books,
  ajaxCallsInProgress,
});

export default rootReducer;
