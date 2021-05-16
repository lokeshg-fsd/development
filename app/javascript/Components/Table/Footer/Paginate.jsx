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
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage,
    )

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
    })

    this.props.setItems(slice)
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
        offset: offset,
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
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}
