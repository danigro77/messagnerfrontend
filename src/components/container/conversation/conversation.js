import * as React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

import equal from 'deep-equal';

import {getConversation, addMessage} from "../../../redux/modules/conversation";
import List from "../../core/list/list";
import TextField from "../../core/text_field/text_field";
import Button from "../../core/buttons/button";
import Pagination from "../conversations/conversations";
import {Row} from "react-bootstrap";


class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      messages: [],
      newMessage: '',
      uuid: '',
      page: 0,
      total: 0,
      per_page: 0,
    }
  }

  componentWillMount() {
    const { params } = this.props.match;
    const newConvo = params.uuid !== this.props.conversation.uuid;
    if (newConvo) {
      this.props.getConversation(params.uuid);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { conversation, match } = this.props;
    const { data, page, total, per_page } = conversation;
    const { uuid, name } = match.params;
    if (!equal(conversation, prevProps.conversation)) {
      this.setState({
        page,
        total,
        per_page,
        uuid,
        name,
        messages: data && data.messages && data.messages.sort((a, b) =>  new Date(b.created_at) - new Date(a.created_at))
      });
    }
  }

  handleChange = (event) => {
    const newMessage = event.target.value;
    this.setState({newMessage});
  };

  sendMessage = () => {
    const { newMessage } = this.state;
    this.props.addMessage(newMessage);
    this.setState({newMessage: ''});
  };

  onPageChange = (page) => {
    this.props.getConversation(this.state.uuid, page.selected);
    this.setState({page: page.selected})
  };

  render() {
    const { name, messages, newMessage, page, total, per_page } = this.state;
    return (
      <div className='conversation'>
        <h2>Your conversation with {name}</h2>
        {page === 0 && <span>
          <TextField value={newMessage} onChange={this.handleChange}/>
          <Button onClick={this.sendMessage} text='Send Message'/>
        </span>}
        <List data={messages} name={name} type='messages'/>
        {total > per_page && <Row><Pagination page={page} total={total} onPageChange={this.onPageChange} /></Row>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  conversation: state.conversation,
});

export default connect(mapStateToProps, {
  getConversation,
  addMessage,
})(withRouter(Conversation));
