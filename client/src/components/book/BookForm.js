import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const BookForm = ({ book, allAuthors, onSave, onChange, saving, errors }) => (
  <Form>
    <h1>Manage Book</h1>
    <TextInput
      name='title'
      label='Title'
      value={book.title}
      onChange={onChange}
      error={errors.title}
    />
    <SelectInput
      name='authorId'
      label='Author'
      value={book.authorId}
      defaultOption='Select Author'
      options={allAuthors}
      onChange={onChange}
      error={errors.authorId}
    />
    <TextInput
      name='category'
      label='Category'
      value={book.category}
      onChange={onChange}
      error={errors.category}
    />
    <TextInput
      name='pages'
      label='Pages'
      value={book.pages}
      onChange={onChange}
      error={errors.length}
    />
    <input
      type='submit'
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className='btn btn-primary'
      onClick={onSave}
    />
  </Form>
);

BookForm.propTypes = {
  book: PropTypes.object,
  allAuthors: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
};

export default BookForm;
