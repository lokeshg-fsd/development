// @flow

import React, { Component } from 'react'

import ReactPaginate from 'react-paginate'
import './styles.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      perPage: 5,
      searchData: props.searchData,
    }
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  receivedData() {
    const APIData = this.props.fetchData()
    const data =
      this.state.searchData !== ''
        ? APIData.filter(
            (item) =>
              item.name.includes(this.state.searchData) ||
              item.email.includes(this.state.searchData) ||
              item.role.includes(this.state.searchData),
          )
        : APIData


    this.props.setItems(data)
  }

  UNSAFE_componentWillReceiveProps({ searchData }) {
    if (this.state.searchData !== searchData) {
      this.setState({ searchData }, () => {
        this.receivedData()
      })
    }
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = selectedPage * this.state.perPage

    this.setState(
      {
        currentPage: selectedPage,
        offset,
      },
      () => {
        this.receivedData()
      },
    )
  }

  componentDidMount() {
    this.receivedData()
  }

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
          onPageChange={this.handlePageClick}
          pageCount={this.state.pageCount}
          pageRangeDisplayed={2}
          previousLabel="prev"
          subContainerClassName="pages pagination"
        />
      </div>
    )
  }
}
