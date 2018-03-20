import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingDots from './loadingDots';

const Header = ({ loading }) => (
  <nav>
    <Link to='/' className='active'>
      Home
    </Link>
    {' | '}
    <Link to='/about' className='active'>
      About
    </Link>
    {' | '}
    <Link to='/courses' className='active'>
      Courses
    </Link>
    {' | '}
    <Link to='/books' className='active'>
      Books
    </Link>
    {loading && <LoadingDots interval={100} dots={20} />}
  </nav>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
