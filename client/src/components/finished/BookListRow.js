import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookListRow = ({ book }) =>
  <tr>
    <td>
      <Link to={`/reading/${book.id}`}>{book.title}</Link>
    </td>
    <td>{book.authorId}</td>
    <td>{book.category}</td>
    <td>{book.pages}</td>
  </tr>;

BookListRow.propTypes = {
  book: PropTypes.shape(),
};

BookListRow.defaultProps = {
  book: {},
};

export default BookListRow;
