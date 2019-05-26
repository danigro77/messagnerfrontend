import * as React from 'react';
import { withRouter } from "react-router";


class Communications extends React.Component {
  render() {
    const { params } = this.props.match;
    console.log(this.props.match, params)
    return (
      <div className='communication'>
        <h2>Communications with {params.uuid}</h2>
      </div>
    );
  }
}

export default withRouter(Communications);
