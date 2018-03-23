import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';
import authorsFormattedForDropdown from '../../selectors/selectors';

export class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, props.book),
      errors: {},
      saving: false,
    };
    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id !== nextProps.book.id) {
      this.setState({ book: Object.assign({}, nextProps.book) });
    }
  }

  updateBookState(event) {
    const field = event.target.name;
    const book = Object.assign({}, this.state.book);
    book[field] = event.target.value;
    return this.setState({ book });
  }

  bookFormIsValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.book.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  saveBook(event) {
    event.preventDefault();

    if (!this.bookFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions
      .saveBook(this.state.book)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Book saved');
    this.props.history.push('/books');
  }

  render() {
    return (
      <BookForm
        allAuthors={this.props.authors}
        book={this.state.book}
        errors={this.state.errors}
        onChange={this.updateBookState}
        onSave={this.saveBook}
        saving={this.state.saving}
      />
    );
  }
}

ManageBookPage.propTypes = {
  book: PropTypes.shape(),
  authors: PropTypes.arrayOf(PropTypes.shape).isRequired,
  actions: PropTypes.shape().isRequired,
};

ManageBookPage.defaultProps = {
  book: {},
};

ManageBookPage.contextTypes = {
  router: PropTypes.shape(),
};

function getBookById(books, id) {
  const book = books.filter(book => book.id === id);
  if (book) {
    return book[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const bookId = ownProps.match.params.id;
  let book = {
    id: '',
    title: '',
    authorId: '',
    pages: '',
    category: '',
  };

  if (bookId && state.books.length > 0) {
    book = getBookById(state.books, bookId);
  }

  return {
    book,
    authors: authorsFormattedForDropdown(state.authors),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ManageBookPage),
);
