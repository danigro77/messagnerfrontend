import * as React from 'react';
import { Link } from 'react-router-dom'
import {Row, Col} from "react-bootstrap";

import {formatDate} from "../../../helper/date_helper";

class ConversationsItem extends React.Component {
  render() {
    const { itemData } = this.props;
    const { name, unread, last_message, uuid } = itemData;
    return (
      <Row className='conversations-item'>
        <Col><Link to={`/conversations/${uuid}/${name}`}>Sender: {name}</Link></Col>
        <Col>Unread messages: {unread}</Col>
        <Col>Last message sent: {formatDate(last_message.created_at)}</Col>
      </Row>
    )
  }
}

export default ConversationsItem;