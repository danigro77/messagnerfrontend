import * as React from 'react';

import './list_item.css'

class ListItem extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className='list-item'>
        {children}
      </div>
    )
  }
}

export default ListItem;