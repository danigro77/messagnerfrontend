import * as React from 'react';

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