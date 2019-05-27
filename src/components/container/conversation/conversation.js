import * as React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

import equal from 'deep-equal';

import {getConversation} from "../../../redux/modules/conversation";
import List from "../../core/list/list";


class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: {},
      name: '',
      messages: [],
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
    const { data } = conversation;
    if (!equal(conversation, prevProps.conversation)) {
      this.setState({
        conversation,
        name: match.params.name,
        messages: data && data.messages && data.messages.sort((a, b) =>  new Date(b.created_at) - new Date(a.created_at))
      });
    }
  }

  render() {
    const { conversation, name, messages } = this.state;
    const { uuid } = conversation;
    return (
      <div className='conversation'>
        <h2>Your conversation with {name}</h2>
        <List data={messages} type='messages'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  conversation: state.conversation,
});

export default connect(mapStateToProps, {
  getConversation,
})(withRouter(Conversation));
