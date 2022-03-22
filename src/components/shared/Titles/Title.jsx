import React from 'react';
import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <>
      <h4 className="font-weight"> { text } </h4>
    </>
  );
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
}