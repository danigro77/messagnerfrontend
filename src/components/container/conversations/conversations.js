import * as React from 'react';
import { connect } from 'react-redux';

import equal from 'deep-equal';

import {getConversations} from "../../../redux/modules/conversations";

class Conversations extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      total: 0,
      page: 0,
    };
  }

  componentWillMount() {
    if (!this.props.conversations.total) {
      this.props.getConversations();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { total, data } = this.props.conversations;
    if (this.props.conversations && (prevState.total !== total || !equal(data, prevState.data))) {
      this.setState({
        total,
        data: data.sort((a, b) =>  new Date(b.last_message.created_at) - new Date(a.last_message.created_at))
      })
    }
  }

  render() {
    const {total, data} = this.state;
    return (
      <div className='converstaion-list'>
        <h2>All Conversations</h2>
        <p>{total}</p>
        <ul>
          {data && data.map(item => {
            const {name, last_message} = item;
            return <li>{name} - {last_message && last_message.created_at}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  conversations: state.conversations,
});

export default connect(mapStateToProps, {
  getConversations,
})(Conversations);
