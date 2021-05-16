import React, { useState } from 'react'
import './PopupStyle.css'

const EditPopup = ({ item, handleOnClose, handleOnSave }) => {
  const [name, setName] = useState(item.name || '')
  const [email, setEmail] = useState(item.email || '')
  const [role, setRole] = useState(item.role || '')

  return (
    <div className="popup-box">
      <div className="box">
        <input
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />{' '}
        <br />
        <input
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />{' '}
        <br />
        <input
          value={role}
          onChange={(event) => setRole(event.currentTarget.value)}
        />{' '}
        <br />
        <input
          type="button"
          value="Save"
          onClick={() => handleOnSave({ ...item, name, email, role })}
        />
        <input type="button" value="Cancel" onClick={handleOnClose} />
      </div>
    </div>
  )
}

export default EditPopup
