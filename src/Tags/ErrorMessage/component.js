import React from 'react';
import PropTypes from 'prop-types';


function ErrorMessage({ errorMessage }) {
  return <p className="errorMessage">{errorMessage}</p>;
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorMessage.defaultProps = {
  errorMessage: null,
};

export default ErrorMessage;
