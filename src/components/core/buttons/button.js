import * as React from 'react';

import './button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, text } = this.props;

    return (
      <button
        className="button"
        onClick={event => onClick(event)}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
