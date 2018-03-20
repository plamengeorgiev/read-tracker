import * as types from './actionTypes';
import bookApi from '../api/mockBookApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadBooksSuccess(books) {
  return {
    type: types.LOAD_BOOKS_SUCCESS, books,
  };
}

export function createBookSuccess(book) {
  return {
    type: types.CREATE_BOOK_SUCCESS, book,
  };
}

export function updateBookSuccess(book) {
  return {
    type: types.UPDATE_BOOK_SUCCESS, book,
  };
}

export function loadBooks() {
  return function loadBooksDispatcher(dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.getAllBooks().then((books) => {
      dispatch(loadBooksSuccess(books));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function saveBook(book) {
  return function saveBookDispatcher(dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.saveBook(book).then((savedBook) => {
      if (book.id) {
        dispatch(updateBookSuccess(savedBook));
      } else {
        dispatch(createBookSuccess(savedBook));
      }
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}

// return function saveCourseDispatcher(dispatch, getState) {
