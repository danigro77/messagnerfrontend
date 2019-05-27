import * as React from 'react';


class Button extends React.Component {
  render() {
    const { onClick, text } = this.props;

    return <button onClick={(event) => onClick(event)}>{text}</button>
  }
}

export default Button;