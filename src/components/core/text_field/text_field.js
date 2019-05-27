import * as React from 'react';

import './text_field.css'


class TextField extends React.Component {
  render() {
    return (
      <textarea className='text-field' value={this.props.value} onChange={event => this.props.onChange(event)} />
    )
  }
}

export default TextField;