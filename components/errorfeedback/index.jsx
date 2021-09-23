import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorFeedback({ message }) {
  return message && <div className="error-feedback mt-2">{message}</div>;
}

ErrorFeedback.propTypes = {
  message: PropTypes.string,
};

ErrorFeedback.defaultProps = {
  message: '',
};
