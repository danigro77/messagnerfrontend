import * as React from 'react';
import PropTypes from 'prop-types';

import './list_item_template.css';

import { formatDate } from '../../../helper/date_helper';

class MessagesItem extends React.Component {
  render() {
    const { itemData, sender } = this.props;
    const { created_at, body, direction } = itemData;
    return (
      <div className={`message-item message-item-${direction}`}>
        <div className="sender">
          {direction === 'incoming' ? sender : 'Me'}
:
        </div>
        <div>
Sent at:
          {formatDate(created_at)}
        </div>
        <div>{body}</div>
      </div>
    );
  }
}

MessagesItem.propTypes = {
  itemData: PropTypes.shape({
    body: PropTypes.string,
    uuid: PropTypes.number,
    created_at: PropTypes.string,
  }).isRequired,
  sender: PropTypes.string.isRequired,
};

export default MessagesItem;
