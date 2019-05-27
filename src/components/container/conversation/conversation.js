import * as React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

import equal from 'deep-equal';

import {getConversation, addMessage} from "../../../redux/modules/conversation";
import List from "../../core/list/list";
import TextField from "../../core/text_field/text_field";
import Button from "../../core/buttons/button";


class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: {},
      name: '',
      messages: [],
      newMessage: '',
      uuid: '',
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
    const { data, uuid } = conversation;
    if (!equal(conversation, prevProps.conversation)) {
      this.setState({
        conversation,
        uuid,
        name: match.params.name,
        messages: data && data.messages && data.messages.sort((a, b) =>  new Date(a.created_at) - new Date(b.created_at))
      });
    }
  }

  handleChange = (event) => {
    const newMessage = event.target.value;
    this.setState({newMessage});
  };

  sendMessage = () => {
    const { uuid, newMessage } = this.state;
    this.props.addMessage(uuid, newMessage);
    this.setState({newMessage: ''});
  };

  render() {
    const { name, messages, newMessage } = this.state;
    return (
      <div className='conversation'>
        <h2>Your conversation with {name}</h2>
        <List data={messages} name={name} type='messages'/>
        <TextField value={newMessage} onChange={this.handleChange}/>
        <Button onClick={this.sendMessage} text='Send Message'/>
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
