import * as React from 'react';
import PropTypes from 'prop-types';

import './text_field.css';


class TextField extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <textarea className="text-field" value={value} onChange={event => onChange(event)} />
    );
  }
}

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextField;
