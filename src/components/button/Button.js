import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  return props.messageType === 'warning' ? (
    <button className='button button--warning'>{props.children}</button>
  ) : (
    <button className='button button--info'>{props.children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  messageType: PropTypes.string,
};

Button.defaultProps = {
  children: 'Click Me',
  messageType: 'info',
};

export default Button;
