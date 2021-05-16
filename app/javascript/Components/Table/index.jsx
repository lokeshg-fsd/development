import React, { useState } from 'react'

import '../Styles.css'

import SearchBar from './SearchBar'
import ReportHeader from './ReportHeader'
import ReportBody from './ReportBody'
import EditPopup from './EditPopOver'
import DeleteButton from './Footer/DeleteButton'
import Paginate from './Footer/Paginate'

export default function Table({ fetchData }) {
  const [selectAll, setSelectAll] = useState(false)
  const [items, setItems] = useState([])
  const [editItem, setEdititem] = useState(null)
  const [open, setOpen] = useState(false)
  const [searchData, setSearchData] = useState('')

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

    alert('SuccessFully Saved Your Changes')
    setItems(saved)
    setOpen(false)
  }

  function handleOnDelete(id) {
    const itemToDelete = items.find((item) => item.id === id)

    if (itemToDelete) {
      const filterItems = items.filter((item) => item.id !== itemToDelete.id)

      alert('SuccessFully Deleted')
      setItems(filterItems)
    } else {
      alert('Not Found Relevent Data')
    }
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
      <SearchBar handleOnSearch={setSearchData} />
      <ReportHeader isChecked={selectAll} setIsChecked={setSelectAll} />
      <ReportBody
        handleOnDelete={handleOnDelete}
        items={items}
        handleOnEdit={handleOnEdit}
      />
      {open && (
        <EditPopup
          item={editItem}
          handleOnClose={() => setOpen(false)}
          handleOnSave={handleOnSave}
        />
      )}
      <div className="Footer">
        <DeleteButton handleOnClick={handleOnDeleteSelected} />
        <Paginate
          fetchData={fetchData}
          searchData={searchData}
          setItems={setItems}
        />
      </div>
    </div>
  )
}
