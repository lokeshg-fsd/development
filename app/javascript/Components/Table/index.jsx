// @flow

import React, { useEffect, useState, useMemo } from 'react'

import '../Styles.css'

import SearchBar from './SearchBar'
import ReportHeader from './ReportHeader'
import ReportBody from './ReportBody'
import EditPopup from './EditPopOver'
import DeleteButton from './Footer/DeleteButton'

import { fetchPersonsAPI } from '../Data'
import useCustomFetch from '../hooks/useCustomFetch'
import deleteEmployee from './lib/deleteEmployee'

const DataFields = [
  'Name',
  'Email',
  'Role',
  'Address',
  'Branch',
  'Blood',
  'Status',
]

// eslint-disable-next-line no-unused-vars
export default function Table({ fetchData }: *) {
  const [selectAll, setSelectAll] = useState(false)
  const [items, setItems] = useState([])
  const [editItem, setEdititem] = useState(null)
  const [open, setOpen] = useState(false)
  const [searchData, setSearchData] = useState('')

  const [data, loading, reload] = useCustomFetch(fetchPersonsAPI)

  const fetchAPIData = useMemo(() => {
    if (loading) {
      return []
    }
    const details = (data?.data || []).map((item) => {
      const { person, branch, blood } = item

      return {
        id: person.id,
        name: `${person.firstName} ${person.lastName}`,
        email: person.email,
        status: person.status ? 'Active' : 'Inactive',
        checked: selectAll || !!person.status,
        role: person?.userType,
        branch: branch?.name || '',
        blood: blood.group,
        address: person.address,
      }
    })

    if (searchData) {
      return details.filter(
        (item) =>
          DataFields.find((field) =>
            item[field.toLowerCase()]?.includes(searchData),
          ),
        /* item.name.includes(searchData) ||
          item.email.includes(searchData) ||
          item.role.includes(searchData), */
      )
    }

    return details
  }, [data?.data, loading, searchData, selectAll])

  useEffect(() => {
    setItems(fetchAPIData)
  }, [fetchAPIData])

  function handleOnEdit(item) {
    setEdititem(items.find((current) => current.id === item.id))
    setOpen(true)
  }

  function handleOnSave(itemToSave) {
    const saved = items.map((item) =>
      item.id === itemToSave.id
        ? {
            ...item,
            name: itemToSave.name,
            email: itemToSave.email,
            role: itemToSave.role,
          }
        : item,
    )

    // eslint-disable-next-line no-alert
    alert('SuccessFully Saved Your Changes')
    setItems(saved)
    setOpen(false)
  }

  function handleOnDelete(email: string) {
    const response = deleteEmployee(email)

    // eslint-disable-next-line no-alert
    alert(response.message, 'Deleted Succseffully')
    reload()
  }

  function handleOnDeleteSelected() {
    if (selectAll) {
      setItems([])
    } else {
      setItems(items.filter((item) => !item.checked))
    }
  }

  return (
    <div>
      <SearchBar handleOnSearch={setSearchData} onRefresh={reload} />
      <ReportHeader
        fields={DataFields}
        isChecked={selectAll}
        setIsChecked={setSelectAll}
      />
      <ReportBody
        fields={DataFields}
        handleOnDelete={handleOnDelete}
        handleOnEdit={handleOnEdit}
        items={items}
      />
      {open && (
        <EditPopup
          handleOnClose={() => setOpen(false)}
          handleOnSave={handleOnSave}
          item={editItem}
        />
      )}
      <div className="Footer">
        <DeleteButton handleOnClick={handleOnDeleteSelected} />
      </div>
    </div>
  )
}
