import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './BookList';

class BooksPage extends React.Component {
  static courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


  redirectToAddCoursePage() {
    this.props.history.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type='submit'
          value='Add book'
          className='btn btn-primary'
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}

BooksPage.propTypes = {
  courses: PropTypes.shape.isRequired,
  actions: PropTypes.shape.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
