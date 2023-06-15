/* eslint-disable no-sequences */
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ( props ) => {
  const { backgroundColor, size, label, padding, color, mode } = props; 

  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${mode}`].join(' ')}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : '',
        color: color ? color : '',
        padding: padding ? padding : '',
      }}
      {...props}
    >
      {label}
    </button>
  );
};


Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
  padding: PropTypes.string,
  color: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'solid',
  size: 'medium',
  onClick: undefined,
};
