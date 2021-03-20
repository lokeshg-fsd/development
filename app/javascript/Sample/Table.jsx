// @flow

import React, { useMemo, useState, Fragment, useEffect } from 'react'
import {
  ReactDataGrid,
  ReactDataGridColumn,
  ReactDataGridColumnLevel,
} from 'flexicious-react-datagrid'
import axios from 'axios'

const DataProvider = JSON
const Table = () => {
  const [books, setBooks] = useState(null)

  const apiURL = 'http://localhost:3000/persons'
  const fetchData = async (api) => {
    const response = await axios.get(api)

    if (response?.data) {
      return response.data
    }

    return fetchData(api)
  }
  useEffect(() => {
    if (books) {
      return
    }
    setBooks(fetchData(apiURL) || [])
  }, [books])

  return useMemo(() => {
    if (!books) {
      return <span> {books || 'Nothing'} </span>
    }

    return (
      <Fragment>
        <span> {books || 'Nothings'} </span>
        <h1 style={{ textAlign: 'left' }}> Simple Table </h1>
        <ReactDataGrid dataProvider={books} editable width={'100%'}>
          <ReactDataGridColumnLevel>
            <ReactDataGridColumn
              dataField={'firstName'}
              headerText={'Username'}
              editable={false}
            />
            <ReactDataGridColumn
              dataField={'lastName'}
              headerText={'Name'}
              editable
            />
            <ReactDataGridColumn
              dataField={'address'}
              headerText={'Age'}
              editable
            />
            <ReactDataGridColumn
              dataField={'phone'}
              headerText={'Phone'}
              editable
            />
            <ReactDataGridColumn
              dataField={'email'}
              headerText={'Email'}
              editable
            />
            <ReactDataGridColumn
              dataField={'userType'}
              headerText={'Password'}
              editable
            />
            <ReactDataGridColumn
              dataField={'status'}
              headerText={'CheckBox'}
              editable={false}
            />
            <ReactDataGridColumn dataField={'created_at'} headerText={'Date'} />
          </ReactDataGridColumnLevel>
        </ReactDataGrid>

        {books?.map((data) => {
          ;<Fragment>
            {Object.keys(data).map((key) => (
              <Fragment>
                <label title={data[key]} /> <br /> <label title={key} />
              </Fragment>
            ))}{' '}
          </Fragment>
        })}
      </Fragment>
    )
  }, [books])
}

export default Table
