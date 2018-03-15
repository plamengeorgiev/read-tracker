// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

/* eslint-disable import/default */
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import App from './components/App';
import withTracker from "./components/withTracker/withTracker";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render((
  <Provider store={store}>
    <BrowserRouter>
      <Route render={props => <App {...props}  />}/>
    </BrowserRouter>
  </Provider>
  ), 
  document.getElementById('root'),
);
