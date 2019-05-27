import * as React from 'react';
import { Link } from 'react-router-dom'

import {formatDate} from "../../../helper/date_helper";

class ConversationsItem extends React.Component {
  render() {
    const { itemData } = this.props;
    const { name, unread, last_message, uuid } = itemData;
    return (
      <Link className='conversations-item' to={`/conversations/${uuid}/${name}`}>
        <div>Sender: {name}</div>
        <div>Unread messages: {unread}</div>
        <div>Last message sent: {formatDate(last_message.created_at)}</div>
      </Link>
    )
  }
}

export default ConversationsItem;