import * as React from 'react';
import ListItem from "../list_item/list_item";
import ConversationsItem from "../list_item_templates/conversations_item";

class List extends React.Component {

  renderItemTemplate(item) {
    const { type } = this.props;
    if (type === 'conversations') {
      return <ConversationsItem itemData={item}/>
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className='list'>
        <ul>
          {data && data.map((item, idx) => {
            return <li key={idx}>
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