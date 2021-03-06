import * as React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import './pagination.css';

class Pagination extends React.Component {
  render() {
    const { total, onPageChange } = this.props;
    return (
      <div className="pagination">
        <ReactPaginate
          pageCount={total > 0 ? total / 10 : 0}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={event => onPageChange(event)}
          initialPage={0}
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Pagination;
