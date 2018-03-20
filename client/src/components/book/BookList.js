import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import BookListRow from './BookListRow';

const BookList = ({ books }) =>
  <Table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Pages</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <BookListRow key={book.id} book={book} />
      ))}
    </tbody>
  </Table>;

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};


export default BookList;
