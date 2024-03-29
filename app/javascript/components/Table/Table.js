// @flow
import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
// core components
import styles from 'assets/jss/material-dashboard-react/components/tableStyle'

const useStyles = makeStyles(styles)

export default function CustomTable(props) {
  const classes = useStyles()
  const { tableHead, tableData, tableHeaderColor } = props

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead === undefined && (
          <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => (
                <TableCell
                  key={key}
                  className={`${classes.tableCell} ${classes.tableHeadCell}`}
                >
                  {prop}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tableData.map((prop, key) => (
            <TableRow key={key} className={classes.tableBodyRow}>
              {/* eslint-disable-next-line no-shadow */}
              {prop.map((prop, key) => (
                <TableCell key={key} className={classes.tableCell}>
                  {prop}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
}

CustomTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
}
