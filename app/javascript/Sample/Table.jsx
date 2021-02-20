// @flow 

import React, { useMemo, useState, Fragment } from 'react'
import { ReactDataGrid, ReactDataGridColumn, ReactDataGridColumnLevel }
 from 'flexicious-react-datagrid'
 import axios from 'axios'

const DataProvider = JSON
const Table = () => {
    const [books, setBooks] =  useState(null);

    const apiURL = 'http://localhost:3000/persons'

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data) 
    }
   
    
    return useMemo( () =>{
        if (!books?.data) {
            fetchData()

            return
        }

        const dataValues =  books.data

        return (
            <Fragment>
               {/* <span> {books} </span>
            <h1 style={{ textAlign: 'left' }}> Simple Table </h1>
                 <ReactDataGrid dataProvider={books} editable width={"100%"} >
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
        </ReactDataGrid> */ }

                { dataValues.map((data) => {
                    <Fragment>
                        {Object.keys(data).map((key) => 
                         (
                        <Fragment>
                             <label title={data[key]} /> <br /> <label  title= {key}/>
                        </Fragment>))
                                     } </Fragment> } )}
                </Fragment>
        )
    } , [books] )
   
     
}

export default Table;