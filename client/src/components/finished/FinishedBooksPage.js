import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookList from './BookList';

class FinishedBooksPage extends React.Component {
  static bookRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  constructor(props, context) {
    super(props, context);
    this.redirectToAddBookPage = this.redirectToAddBookPage.bind(this);
  }


  redirectToAddBookPage() {
    this.props.history.push('/book');
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>Books</h1>
        <input
          type='submit'
          value='Add book'
          className='btn btn-primary'
          onClick={this.redirectToAddBookPage}
        />
        <BookList books={books} />
      </div>
    );
  }
}

FinishedBooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()),
};

FinishedBooksPage.defaultProps = {
  books: [],
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishedBooksPage);
