// @flow

import React, { Component } from 'react'

import ReactPaginate from 'react-paginate'
import './styles.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactPaginate
          activeClassName="active"
          breakClassName="break-me"
          breakLabel="..."
          containerClassName="pagination"
          marginPagesDisplayed={2}
          nextLabel="next"
          pageCount={this.state.pageCount}
          pageRangeDisplayed={2}
          previousLabel="prev"
          subContainerClassName="pages pagination"
        />
      </div>
    )
  }
}
