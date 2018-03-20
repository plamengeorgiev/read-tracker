import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

function HomePage() {
  return (
    <Jumbotron>
      <h1>Pluralsight administration</h1>
      <p>React, Redux andr React Router in ES6 </p>
      <Link to='about' className='btn btn-primary btn-lg'>
        Learn mode
      </Link>
    </Jumbotron>
  );
}

export default HomePage;
