// @flow 

import React, { useMemo } from 'react'
import { ReactDataGrid, ReactDataGridColumn, ReactDataGridColumnLevel }
 from 'flexicious-react-datagrid'

const Table = () => {
    async function getData() {
        const response = await  fetch('http://localhost:3000/persons')
    const values = await response.json()

    if (!values) {
         return getData()
    }

    return values
    }
   
    const { data } = getData()

    return useMemo( () =>{
        if (!data?.length) {
            return
        }

        return (
            <div>
                <h1 style={{ textAlign: 'left' }}> Simple Table </h1>
                <ReactDataGrid dataProvider={data} editable width={"100%"} >
                    <ReactDataGridColumnLevel>
                        <ReactDataGridColumn dataField={'firstName'} headerText={'Username'}   editable={false} />
                        <ReactDataGridColumn dataField={'lastName'} headerText={'Name'}   editable />
                        <ReactDataGridColumn dataField={'address'} headerText={'Age'} editable />
                        <ReactDataGridColumn dataField={'phone'} headerText={'Phone'}   editable />
                        <ReactDataGridColumn dataField={'email'} headerText={'Email'}  editable />
                        <ReactDataGridColumn dataField={'userType'} headerText={'Password'}  editable />
                        <ReactDataGridColumn dataField={'status'} headerText={"CheckBox"}  editable={false} />
                        <ReactDataGridColumn dataField={'created_at'} headerText={"Date"}  />
                    </ReactDataGridColumnLevel>
                </ReactDataGrid>
            </div>
        )
    } , [data] )
   
     
}

export default Table;