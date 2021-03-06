import * as React from 'react';
import { connect } from 'react-redux';

import equal from 'deep-equal';
import {Container, Row} from "react-bootstrap";

import {getConversations} from "../../../redux/modules/conversations";
import Pagination from "../../core/pagination/pagination";
import List from "../../core/list/list";

const KEYS_TO_FILTERS = ['name']

class Conversations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      page: 0,
      per_page: 0,
    };
  }

  componentWillMount() {
    if (!this.props.conversations.total) {
      this.props.getConversations();
    } else if (this.state.data.length === 0) {
      const { total, data, page, per_page } = this.props.conversations;
      this.setState({
        total,
        page,
        per_page,
        data: data && data.sort((a, b) =>  new Date(b.last_message.created_at) - new Date(a.last_message.created_at))
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { total, data, page, per_page } = this.props.conversations;
    if (this.props.conversations && (prevState.total !== total || !equal(data, prevState.data))) {
      this.setState({
        total,
        page,
        per_page,
        data: data && data.sort((a, b) =>  new Date(b.last_message.created_at) - new Date(a.last_message.created_at))
      })
    }
  }

  onPageChange = (page) => {
    this.props.getConversations(page.selected);
    this.setState({page: page.selected})
  };

  render() {
    const { total, data, page, per_page } = this.state;
    return (
      <Container className='conversations'>
        <Row><h2>{total} Conversations</h2></Row>
        <Row>
          <List
            data={data}
            type='conversations'
            withSearch
            searchKeys={KEYS_TO_FILTERS}
          />
        </Row>
        {total > per_page && <Row><Pagination page={page} total={total} onPageChange={this.onPageChange} /></Row>}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  conversations: state.conversations,
});

export default connect(mapStateToProps, {
  getConversations,
})(Conversations);
