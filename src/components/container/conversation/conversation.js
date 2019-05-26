import * as React from 'react';
import { withRouter } from "react-router";


class Conversation extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <div className='conversation'>
        <h2>Your conversation with {params.uuid}</h2>
      </div>
    );
  }
}

export default withRouter(Conversation);
