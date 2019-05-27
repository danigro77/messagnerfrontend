import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { formatDate } from '../../../helper/date_helper';

class ConversationsItem extends React.Component {
  render() {
    const { itemData } = this.props;
    const {
      name, unread, last_message, uuid,
    } = itemData;
    return (
      <Row className="conversations-item">
        <Col>
          <Link to={`/conversations/${uuid}/${name}`}>
Sender:
            {name}
          </Link>
        </Col>
        <Col>
Unread messages:
          {unread}
        </Col>
        <Col>
Last message sent:
          {formatDate(last_message.created_at)}
        </Col>
      </Row>
    );
  }
}

ConversationsItem.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    unread: PropTypes.number,
    last_message: PropTypes.shape({
      created_at: PropTypes.string
    }),
    uuid: PropTypes.string,
  }).isRequired
};

export default ConversationsItem;
