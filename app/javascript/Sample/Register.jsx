// @flow
import React, { useReducer } from 'react'
import './Home.css'
import { Button, TextField } from '@material-ui/core'
import Lock from '@material-ui/icons/Lock'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ViewAgenda from '@material-ui/icons/ViewAgenda'
import SaveIcon from '@material-ui/icons/Save'
import reducer from './Reducer.jsx'

const Register = (props) => {
  const initState = {
    age: props.age ? props.age : 18,
    name: props.name ? props.name : '',
    email: props.email ? props.email : '',
    username: props.username ? props.username : '',
    phone: props.phone ? props.phone : '',
    password: props.password ? props.password : '',
    confirm: props.password ? props.password : '',
    edit: props.edit ? props.edit : false,
  }
  const [state, dispatch] = useReducer(reducer, initState)
  const validator = () => {
    const resultu = !!String(state.username).match('[A-Za-z0-9]{5,}')
    const resultnn = !!String(state.name).match('[A-Za-z ]{5,}')
    const resultph = !!String(state.phone).match('[0-9]{10}')
    const resultue = !!String(state.email).match(
      '[A-Za-z0-9]+@[A-Za-z0-9]+[.]+[A-Za-z]{2,}',
    )
    const resultnp = !!String(state.password).match('[A-Za-z0-9!@#$%^&]{8,}')

    debugger
    if (resultnn === false) {
      alert('Invalid Name')
      dispatch({ type: 'name' })

      return false
    }
    if (resultnp === false && (state.password === state.confirm) === false) {
      alert('Invalid Password')
      dispatch({ type: 'password' })
      dispatch({ type: 'confirm' })

      return false
    }
    if (resultu === false) {
      alert('Invalid Username')
      dispatch({ type: 'username' })

      return false
    }
    if (resultph === false) {
      alert('invalid Phone ')
      dispatch({ type: 'phone' })

      return false
    }
    if (resultue === false) {
      alert('invalid Email')
      dispatch({ type: 'email' })

      return false
    }

    return true
  }
  const handleEdit = () => {
    const newdata = []
    let count = 0
    const data = JSON.parse(localStorage.getItem('data'))

    data.map((obj) => {
      if (obj.username === state.username && count === 0) {
        obj.name = state.name
        obj.email = state.email
        obj.age = state.age
        obj.phone = state.phone
        obj.password = state.password
        obj.confirmpassword = state.confirm
        newdata.push(obj)
        count += 1
      } else if (count !== 1) {
        newdata.push(obj)
      }
    })
    if (count > 0) {
      localStorage.removeItem('data')
      localStorage.setItem('data', JSON.stringify(newdata))
      alert(`${state.name} Your  Data is Updated,   Check the Updated Data `)
      dispatch({ type: 'edit', payload: { value: false } })
      props.viewData()
    } else {
      const obj = {
        name: state.name,
        email: state.email,
        age: state.age,
        phone: state.phone,
        username: state.username,
        password: state.password,
        confirmpassword: state.confirm,
      }

      newdata.push(obj)
      localStorage.removeItem('data')
      localStorage.setItem('data', JSON.stringify(newdata))
      alert(`${state.name} Your  data was saved. you  can View the Data`)
      props.viewData()
    }
  }
  const storageHandler = () => {
    try {
      const val = validator()

      if (val === true && state.edit) {
        handleEdit()
      } else if (val === true) {
        let data
        let exist = false

        if (localStorage.getItem('data')) {
          data = JSON.parse(localStorage.getItem('data'))
          data.map((obj) => {
            if (obj.username === state.username) {
              alert('Username Already Exists Please Try Again')
              exist = true
            }
          })
        } else {
          data = []
        }
        if (!exist) {
          const obj = {
            name: state.name,
            email: state.email,
            age: state.age,
            phone: state.phone,
            username: state.username,
            password: state.password,
            confirmpassword: state.confirm,
          }

          data.push(obj)
          localStorage.setItem('data', JSON.stringify(data))
          alert(`${state.name} Your data was saved. you  can View the Data`)
          props.viewData()
        }
      } else {
        const data1 = JSON.stringify({
          name: state.name,
          email: state.email,
          age: state.age,
          phone: state.phone,
          username: state.username,
          password: state.password,
        })

        alert(`${data1} Unable to Process`)
      }
    } catch (e) {
      alert(e)
    }
  }

  // alert(state.age);
  return (
    <div className="box">
      <div className="Main">
        <form>
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter Name"
            onChange={(e) =>
              dispatch({ type: 'name', payload: { value: e.target.value } })
            }
            size="small"
            style={{ margin: '10px' }}
            value={state.name}
            variant="outlined"
          />
          <br />
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter UserName"
            onChange={(e) =>
              dispatch({ type: 'user', payload: { value: e.target.value } })
            }
            size="small"
            style={{ margin: '10px' }}
            value={state.username}
            variant="outlined"
          />{' '}
          <br />
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter Email"
            onChange={(e) =>
              dispatch({ type: 'email', payload: { value: e.target.value } })
            }
            size="small"
            style={{ margin: '10px' }}
            type="email"
            value={state.email}
            variant="outlined"
          />{' '}
          <br />
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter Age"
            style={{ margin: '10px' }}
            value={String(state.age)}
            variant="outlined"
          />{' '}
          <br />
          <Button
            className={props.styles.root}
            color="primary"
            onClick={() => dispatch({ type: 'ageincrement' })}
            style={{ margin: '10px' }}
            variant="contained"
          >
            {' '}
            + <ArrowUpward />
          </Button>
          <Button
            className={props.styles.root}
            color="primary"
            onClick={() => dispatch({ type: 'agedecrement' })}
            style={{ margin: '10px' }}
            variant="contained"
          >
            {' '}
            - <ArrowDownward />
          </Button>{' '}
          <br />
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter Phone"
            onChange={(e) =>
              dispatch({ type: 'phone', payload: { value: e.target.value } })
            } //
            size="small"
            style={{ margin: '10px' }}
            value={state.phone}
            variant="outlined"
          />{' '}
          <br />
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter Password"
            onChange={(e) =>
              dispatch({ type: 'password', payload: { value: e.target.value } })
            } //
            size="small"
            style={{ margin: '10px' }}
            type="password"
            value={state.password}
            variant="outlined"
          />{' '}
          <br />
          <TextField
            className={props.styles.root}
            color="primary"
            id="outlined-basic"
            label="Enter Confirm Password "
            onChange={(e) =>
              dispatch({ type: 'confirm', payload: { value: e.target.value } })
            } //
            size="small"
            style={{ margin: '10px' }}
            type="password"
            value={state.confirm}
            variant="outlined"
          />{' '}
          <br />
          <Button
            className={props.styles.root}
            color="primary"
            onClick={storageHandler}
            style={{ margin: '10px' }} //
            variant="contained"
          >
            {' '}
            Submit <SaveIcon />
          </Button>
          <Button
            className={props.styles.root}
            color="secondary"
            onClick={() => props.logout()} //
            style={{ margin: '10px' }}
            variant="contained"
          >
            {' '}
            Logout <Lock />
          </Button>
          <Button
            className={props.styles.root}
            color="primary"
            onClick={() => props.viewData()} //
            style={{ margin: '10px' }}
            variant="contained"
          >
            {' '}
            View <ViewAgenda />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register
