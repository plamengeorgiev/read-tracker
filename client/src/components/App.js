import React from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

class App extends React.Component {
  render() {
    return(
      <div className='container-fluid'>
        <Header
          loading={this.props.loading}
        />
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/:id' component={ManageCoursePage} />
        <Route exact path='/course' component={ManageCoursePage} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default withRouter(connect(mapStateToProps)(App));

