import * as React from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import './list.css'
import {Container, Row} from "react-bootstrap";

import ConversationsItem from "../list_item_templates/conversations_item";
import MessagesItem from "../list_item_templates/messages_item";


class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  searchUpdated = (searchTerm) => {
    this.setState({searchTerm})
  };

  renderItemTemplate = (item) => {
    const { type } = this.props;
    if (type === 'conversations') {
      return <ConversationsItem itemData={item} key={item.uuid}/>
    } else if (type === 'messages') {
      const { name } = this.props;
      return <MessagesItem itemData={item} sender={name} key={item.uuid}/>
    }
  };

  render() {
    const { data, withSearch, searchKeys } = this.props;
    const listData = data && searchKeys && withSearch ? data.filter(createFilter(this.state.searchTerm, searchKeys)) : data;

    return (
      <Container className='list'>
        {withSearch && <Row>
          <SearchInput className="search-input"
                       onChange={this.searchUpdated} />
        </Row>}
        {listData && listData.map((item) => {
          return this.renderItemTemplate(item)
        })}
      </Container>
    )
  }
}

export default List;