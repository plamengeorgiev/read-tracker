import React from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

function App(props) {
  return (
    <div className='container-fluid'>
      <Header
        loading={props.loading}
      />
      <Switch>
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/courses' component={CoursesPage} />
        <Route exact path='/course' component={ManageCoursePage} />
        <Route exact path='/course/:id' component={ManageCoursePage} />
        <Route exact path='/' component={HomePage}/>
      </Switch>
      {props.children}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);

