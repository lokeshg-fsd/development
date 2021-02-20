import React, { useCallback, useReducer } from 'react';
import Register from './Register.jsx';
import './Login.css';
import ViewData from './ViewData.jsx';
import reducer from './Reducer.jsx';
import { MuiThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { orange, green } from '@material-ui/core/colors';
import { Lock, Lo } from '@material-ui/icons/Lock';
import { TextField, AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { LockOpenOutlined, LockOutlined } from '@material-ui/icons';

const initState = {
    age: 18,
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirm: "",
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
        border: "soloid Black",
        //textTransform: 'capitalize',
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
    const [state, dispatch] = useReducer(reducer, initState);
    const classes = useStyles();
    const handleSubmit = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        var exist = false;
        data.map((obj) => {
            if (obj["username"] === state.username && obj["password"] === state.password) {
                dispatch({ type: 'login', payload: { value: true } });
                exist = true;
                //alert("User Found");
            }
        })
        if (!exist) {
            if ("admin" === state.username && "123" === state.password) {
                dispatch({ type: 'login', payload: { value: true } });
                //alert("User Found");
            }
        }
    }
    const editHandler = useCallback((report) => {
        dispatch({ type: 'user', payload: { value: report["username"] } });
        dispatch({ type: 'password', payload: { value: report["password"] } });
        dispatch({ type: 'name', payload: { value: report["name"] } });
        dispatch({ type: 'email', payload: { value: report["email"] } });
        dispatch({ type: 'phone', payload: { value: report["phone"] } });
        dispatch({ type: 'age', payload: { value: report["age"] } });
        alert(report["age"]);
        dispatch({ type: 'view', payload: { value: false } });
        dispatch({ type: 'edit', payload: { value: true } });
    })
    return (
        //<MuiThemeProvider  > 
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Employee Application
                    </Typography>
                    {state.login ? <Button
                        color="inherit"
                        onClick={() => dispatch({ type: 'login', payload: { value: false } })}
                    >Logout <LockOutlined />
                    </Button> :
                        <Button
                            color="inherit"
                            onClick={handleSubmit}
                        >Login <LockOpenOutlined />
                        </Button>}
                </Toolbar>
            </AppBar>
            {state.login ?
                state.view ?
                    <ViewData
                        editHandler={editHandler}
                        styles={classes}
                        return={() => dispatch({ type: 'view', payload: { value: false } })}
                        logout={() => dispatch({ type: 'login', payload: { value: false } })}
                    /> : state.edit ?
                        <Register
                            viewData={() => dispatch({ type: 'view', payload: { value: true } })}
                            username={state.username}
                            styles={classes}
                            name={state.name}
                            email={state.email}
                            password={state.password}
                            edit={state.edit}
                            age={state.age}
                            phone={state.phone}
                            logout={() => dispatch({ type: 'login', payload: { value: false } })}
                        /> :
                        <Register
                            styles={classes}
                            viewData={() => dispatch({ type: 'view', payload: { value: true } })}
                            logout={() => dispatch({ type: 'login', payload: { value: false } })}
                        /> :
                <header className="App-header">
                    <h1  > Login   Here </h1>
                    <form name="Employee" method="POST" >
                        <TextField
                            //className={classes.root}
                            id="outlined-basic"
                            color="primary"
                            size="small"
                            label="Enter UserName"
                            style={{ margin: "10px" }}
                            variant="outlined"
                            value={state.username}
                            onChange={(e) => dispatch({ type: 'user', payload: { value: e.target.value } })}
                        /> <br />
                        <TextField
                            //className={classes.root}
                            id="outlined-basic"
                            type="password"
                            size="small"
                            color="primary"
                            style={{ margin: "10px" }}
                            label="Enter Password"
                            variant="outlined"
                            value={state.password}
                            onChange={(e) => dispatch({ type: 'password', payload: { value: e.target.value } })}
                        /> <br />
                        <Button
                            className={classes.root}
                            classes={{
                                root: classes.root
                            }}
                            /* variant="contained"
                            color="primary"
                            style={{ margin: "10px" }} */
                            onClick={handleSubmit} >
                            Login
                            <LockOpenOutlined />
                        </Button>
                    </form>
                </header>}
        </div>
        // </MuiThemeProvider>
    );
}
export default Login;