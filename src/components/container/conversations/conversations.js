import * as React from 'react';
import { connect } from 'react-redux';

import equal from 'deep-equal';

import {getConversations} from "../../../redux/modules/conversations";
import Pagination from "../../core/pagination/pagination";
import List from "../../core/list/list";

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
        data: data && data.sort((a, b) =>  new Date(b.last_message.created_at) - new Date(a.last_message.created_at))
      })
    }
  }

  onPageChange = (page) => {
    this.props.getConversations(page.selected);
    this.setState({page: page.selected})
  };

  render() {
    const { total, data, page } = this.state;
    return (
      <div className='conversation-list'>
        <h2>All Conversations</h2>
        <p>{total}</p>
        <List data={data} type='conversations'/>
        <Pagination page={page} total={total} onPageChange={this.onPageChange} />
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
