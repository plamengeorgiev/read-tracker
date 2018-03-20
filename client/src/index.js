/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import { loadBooks } from './actions/bookActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadBooks());

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route render={props => <App {...props} />} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
