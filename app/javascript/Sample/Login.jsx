/* eslint-disable no-nested-ternary */
// @flow
import React, { useCallback, useReducer } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import {
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { LockOpenOutlined, LockOutlined } from '@material-ui/icons'
import reducer from './Reducer'
import ViewData from './ViewData'
import Register from './Register'
import './Login.css'

const initState = {
  age: 18,
  name: '',
  email: '',
  username: '',
  phone: '',
  password: '',
  confirm: '',
  edit: false,
  view: false,
  login: false,
}
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    width: '226px',
    textAlign: 'left',
    height: '40px',
    color: 'blue',
    padding: '0px',
    flexGrow: 1,
    border: 'soloid Black',
    // textTransform: 'capitalize',
    background: 'linear-gradient(45deg, #FE6B88, #FF8E53)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

// const theme = createMuiTheme({
// palette : {
//     primary : {
//         main : orange[500],

//     },
//     secondary : {
//         main : green[500]
//     }
// }
// });
const Login = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const classes = useStyles()
  const handleSubmit = () => {
    const data = JSON.parse(localStorage.getItem('data'))
    let exist = false

    data.forEach((obj) => {
      if (obj.username === state.username && obj.password === state.password) {
        dispatch({ type: 'login', payload: { value: true } })
        exist = true
        // alert("User Found");
      }
    })
    if (!exist) {
      if (state.username === 'admin' && state.password === '123') {
        dispatch({ type: 'login', payload: { value: true } })
        // alert("User Found");
      }
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const editHandler = useCallback((report) => {
    dispatch({ type: 'user', payload: { value: report.username } })
    dispatch({ type: 'password', payload: { value: report.password } })
    dispatch({ type: 'name', payload: { value: report.name } })
    dispatch({ type: 'email', payload: { value: report.email } })
    dispatch({ type: 'phone', payload: { value: report.phone } })
    dispatch({ type: 'age', payload: { value: report.age } })
    // eslint-disable-next-line no-alert
    alert(report.age)
    dispatch({ type: 'view', payload: { value: false } })
    dispatch({ type: 'edit', payload: { value: true } })
  })

  return (
    // <MuiThemeProvider  >
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Employee Application
          </Typography>
          {state.login ? (
            <Button
              color="inherit"
              onClick={() =>
                dispatch({ type: 'login', payload: { value: false } })}
            >
              Logout <LockOutlined />
            </Button>
          ) : (
            <Button color="inherit" onClick={handleSubmit}>
              Login <LockOpenOutlined />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {state.login ? (
        state.view ? (
          <ViewData
            editHandler={editHandler}
            logout={() =>
              dispatch({ type: 'login', payload: { value: false } })}
            return={() => dispatch({ type: 'view', payload: { value: false } })}
            styles={classes}
          />
        ) : state.edit ? (
          <Register
            age={state.age}
            edit={state.edit}
            email={state.email}
            logout={() =>
              dispatch({ type: 'login', payload: { value: false } })}
            name={state.name}
            password={state.password}
            phone={state.phone}
            styles={classes}
            username={state.username}
            viewData={() =>
              dispatch({ type: 'view', payload: { value: true } })}
          />
        ) : (
          <Register
            logout={() =>
              dispatch({ type: 'login', payload: { value: false } })}
            styles={classes}
            viewData={() =>
              dispatch({ type: 'view', payload: { value: true } })}
          />
        )
      ) : (
        <header className="App-header">
          <h1> Login Here </h1>
          <form method="POST" name="Employee">
            <TextField
              // className={classes.root}
              color="primary"
              id="outlined-basic"
              label="Enter UserName"
              onChange={(event) =>
                dispatch({
                  type: 'user',
                  payload: { value: event.target.value },
                })}
              size="small"
              style={{ margin: '10px' }}
              value={state.username}
              variant="outlined"
            />{' '}
            <br />
            <TextField
              // className={classes.root}
              color="primary"
              id="outlined-basic"
              label="Enter Password"
              onChange={(event) =>
                dispatch({
                  type: 'password',
                  payload: { value: event.target.value },
                })}
              size="small"
              style={{ margin: '10px' }}
              type="password"
              value={state.password}
              variant="outlined"
            />{' '}
            <br />
            <Button
              classes={{
                root: classes.root,
              }}
              className={classes.root}
              /* variant="contained"
                            color="primary"
                            style={{ margin: "10px" }} */
              onClick={handleSubmit}
            >
              Login
              <LockOpenOutlined />
            </Button>
          </form>
        </header>
      )}
    </div>
    // </MuiThemeProvider>
  )
}

export default Login
