import * as React from 'react';
import {formatDate} from "../../../helper/date_helper";

class ConversationsItem extends React.Component {
  render() {
    const { itemData } = this.props;
    const { name, unread, last_message } = itemData;
    return (
      <div className='conversations-item'>
        <div>Sender: {name}</div>
        <div>Unread messages: {unread}</div>
        <div>Last message sent: {formatDate(last_message.created_at)}</div>
      </div>
    )
  }
}

export default ConversationsItem;