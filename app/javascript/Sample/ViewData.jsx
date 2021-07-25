/* eslint-disable react/prop-types */
// @flow
import React, { useState } from 'react'
import './Report.css'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined'
import { Lock } from '@material-ui/icons'

const ViewData = (props) => {
  const [isDelete, setDelete] = useState(true)
  const deleteReport = (report) => {
    setDelete(true)
    const newdata = []
    const data = JSON.parse(localStorage.getItem('data'))

    // eslint-disable-next-line array-callback-return
    data.map((obj) => {
      if (obj.username !== report.username) {
        newdata.push(obj)
      }
    })
    localStorage.removeItem('data')
    localStorage.setItem('data', JSON.stringify(newdata))
    setDelete(true)
    // eslint-disable-next-line no-alert
    alert('Your Data has Been Deleted')
  }
  const isDeleted = () => {
    // eslint-disable-next-line no-alert
    alert('Your Data has Been Deleted')
    setDelete(true)
  }

  return (
    <div>
      {isDelete ? (
        <table className="customers">
          <tr>
            <th> Username </th>
            <th> Name </th>
            <th> Email </th>
            <th> Age </th>
            <th> Phone Number </th>
            <th> Password </th>
            <th> Confirm Password </th>
            <th> </th>
            <th> </th>
          </tr>
          {JSON.parse(localStorage.getItem('data')).map((report, index) => (
            <tr key={`keyValue${index}`}>
              <td> {report.username} </td>
              <td> {report.name} </td>
              <td>{report.email} </td>
              <td>{report.age} </td>
              <td> {report.phone} </td>
              <td>{report.password}</td>
              <td> {report.password} </td>
              <td>
                <Button
                  color="primary"
                  onClick={() => props.editHandler(report)}
                  style={{ margin: '10px' }}
                  variant="contained"
                >
                  {' '}
                  <EditIcon />{' '}
                </Button>
              </td>
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
              <td
                onClick={() => deleteReport(report)}
                title="Delete this Record"
              >
                <Button
                  color="primary"
                  style={{ margin: '10px' }}
                  variant="contained"
                >
                  {' '}
                  <DeleteIcon />{' '}
                </Button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        isDeleted
      )}
      <div>
        <Button
          color="primary"
          onClick={() => props.return()}
          style={{ margin: '10px' }}
          variant="contained"
        >
          {' '}
          <ArrowLeftOutlined />{' '}
        </Button>
        <Button
          color="primary"
          onClick={() => props.logout()}
          style={{ margin: '10px' }}
          title="Logout of the App"
          variant="contained"
        >
          {' '}
          <Lock />{' '}
        </Button>
      </div>
    </div>
  )
}

export default ViewData
