import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/courseActions';
import BookList from './BookList';

class BooksPage extends React.Component {
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

BooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()),
};

BooksPage.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
