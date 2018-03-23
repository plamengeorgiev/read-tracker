import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';  // eslint-disable-line import/no-named-as-default
import BooksPage from './reading/BooksPage';
import FinishedBooksPage from './finished/FinishedBooksPage';
import ManageBookPage from './reading/ManageBookPage'; // eslint-disable-line import/no-named-as-default

function App(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Header
            loading={props.loading}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/course/:id' component={ManageCoursePage} />
          <Route exact path='/course' component={ManageCoursePage} />
          <Route path='/reading' component={BooksPage} />
          <Route path='/finished' component={BooksPage} />
          <Route path='/book/:id' component={ManageBookPage} />
          <Route exact path='/book' component={ManageBookPage} />
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default withRouter(connect(mapStateToProps)(App));

