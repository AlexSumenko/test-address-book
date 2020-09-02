import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  const buttonClasses = [];
  buttonClasses.push('button');

  switch (props.messageType) {
    case 'warning':
      buttonClasses.push('button--warning');
      break;
    case 'info':
      buttonClasses.push('button--info');
      break;
    default:
  }

  return (
    <button
      type='button'
      onClick={props.deleted}
      className={buttonClasses.join(' ')}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  messageType: PropTypes.string,
  deleted: PropTypes.func,
};

Button.defaultProps = {
  children: 'Click Me',
  messageType: 'info',
};

export default Button;
