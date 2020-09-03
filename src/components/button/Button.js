import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  const buttonClasses = ['button'];

  if (props.messageType) {
    buttonClasses.push(`button--${props.messageType}`);
  }

  return (
    <button
      type='button'
      onClick={props.clicked}
      className={buttonClasses.join(' ')}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  messageType: PropTypes.string,
  clicked: PropTypes.func,
};

Button.defaultProps = {
  children: 'Click Me',
  messageType: '',
};

export default Button;
