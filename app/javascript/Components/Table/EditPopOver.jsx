// @flow

import React, { useState } from 'react'

const EditPopup = ({ item, handleOnClose, handleOnSave }: *) => {
  const [name, setName] = useState(item.name || '')
  const [email, setEmail] = useState(item.email || '')
  const [role, setRole] = useState(item.role || '')

  return (
    <div
      className="popup-box"
      style={{
        position: 'fixed',
        background: '#00000050',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
      }}
    >
      <div
        className="box"
        style={{
          position: 'relative',
          width: '70%',
          margin: '0 auto',
          height: 'auto',
          maxHeight: '70vh',
          marginTop: 'calc(100vh - 85vh - 20px)',
          background: '#fff',
          borderRadius: '4px',
          padding: '20px',
          border: '1px solid #999',
          overflow: 'auto',
        }}
      >
        <input
          onChange={(event) => setName(event.currentTarget.value)}
          value={name}
        />
        <br />
        <input
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
        <br />
        <input
          onChange={(event) => setRole(event.currentTarget.value)}
          value={role}
        />
        <br />
        <input
          onClick={() => handleOnSave({ ...item, name, email, role })}
          type="button"
          value="Save"
        />
        <input onClick={handleOnClose} type="button" value="Cancel" />
      </div>
    </div>
  )
}

export default EditPopup
