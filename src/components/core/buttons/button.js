import * as React from 'react';

import './button.css'

class Button extends React.Component {
  render() {
    const { onClick, text } = this.props;

    return <button
      className='button'
      onClick={(event) => onClick(event)}
    >{text}</button>
  }
}

export default Button;