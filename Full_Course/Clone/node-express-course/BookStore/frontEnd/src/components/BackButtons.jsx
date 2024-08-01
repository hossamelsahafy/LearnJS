import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButtons = ({ destination = '/' }) => {
  return (
    <div>
      <Link to={destination}>
        <BsArrowLeft />
        Back
      </Link>
    </div>
  );
};

export default BackButtons;
