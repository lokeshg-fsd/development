/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
// @flow

import React, { useMemo, useState, Fragment, useEffect } from 'react'
import {
  ReactDataGrid,
  ReactDataGridColumn,
  ReactDataGridColumnLevel,
} from 'flexicious-react-datagrid'
import axios from 'axios'

import useCustom from '../packs/useCustomFetch'

type Props = {
  data: $ReadOnlyArray<*>,
}

function Table({ data }: Props) {
  return (
    <span>
      <>
        {data.map((value, index) => (
          <>
            <div key={index}>
              <label title={JSON.stringify(value)} />
              {Object.keys(value).map((key) => (
                <>
                  <label key={key} title={JSON.stringify(value[key])} />
                </>
              ))}
            </div>
          </>
        ))}
      </>
    </span>
  )

  /* return useMemo(() => {
    if (data) {
      return (
        <span>
          <Fragment>
            {data.map((value, index) => (
              <Fragment>
                <div key={index}>
                  <label key={index} title={JSON.stringify(value)} />
                  {Object.keys(value).map((key) => (
                    <Fragment>
                      <label key={key} title={JSON.stringify(value[key])} />
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            ))}
          </Fragment>
        </span>
      )
    }

    return (
      <Fragment>
        <h1 style={{ textAlign: 'left' }}> Simple Table </h1>
        <ReactDataGrid
          key={'sumnodf'}
          dataProvider={data}
          editable
          width={'100%'}
        >
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
      </Fragment>
    )
  }, [data]) */
}

export default Table
