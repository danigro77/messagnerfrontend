import * as React from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
  render() {
    const { total, onPageChange } = this.props;
    return (
      <div className='pagination'>
        <ReactPaginate
          pageCount={total>0 ? total/10 : 0}
          pageRangeDisplayed={10}
          marginPagesDisplayed={5}
          onPageChange={event => onPageChange(event)}
          initialPage={0}
        />
      </div>
    )
  }
}

export default Pagination;