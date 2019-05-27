import * as React from 'react';

import './list_item_template.css'

import {formatDate} from "../../../helper/date_helper";

class MessagesItem extends React.Component {
  render() {
    const { itemData } = this.props;
    const { created_at, body, direction } = itemData;
    return (
      <div className={`message-item message-item-${direction}`}>
        <div>Sent at: {formatDate(created_at)}</div>
        <div>{body}</div>
      </div>
    )
  }
}

export default MessagesItem;