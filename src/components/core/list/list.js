import * as React from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import './list.css'

import ListItem from "../list_item/list_item";
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
      return <ConversationsItem itemData={item}/>
    } else if (type === 'messages') {
      return <MessagesItem itemData={item}/>
    }
  };

  render() {
    const { data, withSearch, searchKeys } = this.props;
    const listData = data && searchKeys && withSearch ? data.filter(createFilter(this.state.searchTerm, searchKeys)) : data;

    return (
      <div className='list'>
        {withSearch && <SearchInput className="search-input" onChange={this.searchUpdated} />}
        <ul>
          {listData && listData.map((item) => {
            return <li key={item.uuid}>
              <ListItem>
                {this.renderItemTemplate(item)}
              </ListItem>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default List;