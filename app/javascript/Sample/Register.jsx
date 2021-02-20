import React, { useReducer } from 'react';
import './Home.css';
import { Button, TextField } from '@material-ui/core';
import reducer from './Reducer.jsx';
import Lock from '@material-ui/icons/Lock';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ViewAgenda from '@material-ui/icons/ViewAgenda';
import SaveIcon from '@material-ui/icons/Save';

const Register = (props) => {
    const initState = {
        age: props.age ? props.age : 18,
        name: props.name ? props.name : "",
        email: props.email ? props.email : "",
        username: props.username ? props.username : "",
        phone: props.phone ? props.phone : "",
        password: props.password ? props.password : "",
        confirm: props.password ? props.password : "",
        edit: props.edit ? props.edit : false
    }
    const [state, dispatch] = useReducer(reducer, initState);
    const validator = () => {
        var resultu = (String(state.username).match("[A-Za-z0-9]{5,}")) ? true : false;
        var resultnn = (String(state.name).match("[A-Za-z ]{5,}")) ? true : false;
        var resultph = (String(state.phone).match("[0-9]{10}")) ? true : false;
        var resultue = (String(state.email).match("[A-Za-z0-9]+@[A-Za-z0-9]+[.]+[A-Za-z]{2,}")) ? true : false;
        var resultnp = (String(state.password).match("[A-Za-z0-9!@#$%^&]{8,}")) ? true : false;
        debugger
        if (false === resultnn) {
            alert("Invalid Name");
            dispatch({ type: 'name' });
            return false;
        }
        else if (false === resultnp && (state.password === state.confirm) === false) {
            alert("Invalid Password");
            dispatch({ type: 'password' });
            dispatch({ type: 'confirm' });
            return false;
        }
        else if (false === resultu) {
            alert("Invalid Username");
            dispatch({ type: 'username' });
            return false;
        }
        else if (false === resultph) {
            alert("invalid Phone ");
            dispatch({ type: 'phone' });
            return false;
        }
        else if (false === resultue) {
            alert("invalid Email");
            dispatch({ type: 'email' });
            return false;
        }
        else
            return true;
    }
    const handleEdit = () => {
        var newdata = [], count = 0;
        const data = JSON.parse(localStorage.getItem("data"));
        data.map((obj) => {
            if (obj["username"] === state.username && count === 0) {
                obj["name"] = state.name;
                obj["email"] = state.email;
                obj["age"] = state.age;
                obj["phone"] = state.phone;
                obj["password"] = state.password;
                obj["confirmpassword"] = state.confirm;
                newdata.push(obj);
                count += 1;
            }
            else if (count !== 1) {
                newdata.push(obj);
            }
        })
        if (count > 0) {
            localStorage.removeItem("data");
            localStorage.setItem("data", JSON.stringify(newdata));
            alert(state.name + " Your  Data is Updated,   Check the Updated Data ");
            dispatch({ type: 'edit', payload: { value: false } });
            props.viewData();
        }
        else {
            var obj = {
                "name": state.name,
                "email": state.email,
                "age": state.age,
                "phone": state.phone,
                "username": state.username,
                "password": state.password,
                "confirmpassword": state.confirm
            };
            newdata.push(obj);
            localStorage.removeItem("data");
            localStorage.setItem("data", JSON.stringify(newdata));
            alert(state.name + " Your  data was saved. you  can View the Data");
            props.viewData();
        }
    }
    const storageHandler = () => {
        try {
            var val = validator();
            if (val === true && state.edit) {
                handleEdit();
            }
            else if (val === true) {
                var data;
                var exist = false;
                if (localStorage.getItem("data")) {
                    data = JSON.parse(localStorage.getItem("data"));
                    data.map((obj) => {
                        if (obj["username"] === state.username) {
                            alert("Username Already Exists Please Try Again");
                            exist = true;
                        }
                    })
                }
                else {
                    data = [];
                }
                if (!exist) {
                    var obj = {
                        "name": state.name,
                        "email": state.email,
                        "age": state.age,
                        "phone": state.phone,
                        "username": state.username,
                        "password": state.password,
                        "confirmpassword": state.confirm
                    };
                    data.push(obj);
                    localStorage.setItem("data", JSON.stringify(data));
                    alert(state.name + " Your data was saved. you  can View the Data");
                    props.viewData();
                }
            }
            else {
                var data1 = JSON.stringify({
                    "name": state.name,
                    "email": state.email,
                    "age": state.age,
                    "phone": state.phone,
                    "username": state.username,
                    "password": state.password
                });
                alert(data1 + " Unable to Process");
            }
        }
        catch (e) {
            alert(e);
        }
    }
    //alert(state.age);
    return (
        <div className="box" >
            <div className="Main" >
                <form>
                    
                    <TextField
                        id="outlined-basic"
                        color="primary"
                        label="Enter Name"
                        size="small"
                        className={props.styles.root}
                        style={{ margin: "10px" }}
                        variant="outlined"
                        value={state.name}
                        onChange={(e) => dispatch({ type: 'name', payload: { value: e.target.value } })}
                    />
                    <br />
                    <TextField
                        value={state.username}
                        className={props.styles.root}
                        id="outlined-basic"
                        color="primary"
                        size="small"
                        style={{ margin: "10px" }}
                        label="Enter UserName"
                        variant="outlined"
                        onChange={(e) => dispatch({ type: 'user', payload: { value: e.target.value } })}
                    /> <br />
                    <TextField
                        type="email"
                        size="small"
                        className={props.styles.root}
                        value={state.email}
                        id="outlined-basic"
                        color="primary"
                        style={{ margin: "10px" }}
                        label="Enter Email"
                        variant="outlined"
                        onChange={(e) => dispatch({ type: 'email', payload: { value: e.target.value } })}
                    /> <br />
                    <TextField
                        id="outlined-basic"
                        color="primary"
                        label="Enter Age"
                        className={props.styles.root}
                        style={{ margin: "10px" }}
                        variant="outlined"
                        value={String(state.age)}
                    /> <br />
                    <Button variant="contained"
                        color="primary"
                        className={props.styles.root}
                        style={{ margin: "10px" }}
                        onClick={() => dispatch({ type: 'ageincrement' })}
                    > + <ArrowUpward />
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={props.styles.root}
                        style={{ margin: "10px" }}
                        onClick={() => dispatch({ type: 'agedecrement' })}
                    > - <ArrowDownward />
                    </Button>  <br />
                    <TextField
                        size="small"
                        id="outlined-basic"
                        color="primary"
                        label="Enter Phone"
                        className={props.styles.root} //
                        style={{ margin: "10px" }}
                        variant="outlined"
                        value={state.phone}
                        onChange={(e) => dispatch({ type: 'phone', payload: { value: e.target.value } })}
                    /> <br />
                    <TextField
                        type="password"
                        value={state.password}
                        id="outlined-basic"
                        size="small"
                        className={props.styles.root} // 
                        style={{ margin: "10px" }}
                        color="primary"
                        label="Enter Password"
                        variant="outlined"
                        onChange={(e) => dispatch({ type: 'password', payload: { value: e.target.value } })}
                    /> <br />
                    <TextField
                        type="password"
                        value={state.confirm}
                        id="outlined-basic"
                        size="small"
                        className={props.styles.root} //
                        style={{ margin: "10px" }}
                        color="primary"
                        label="Enter Confirm Password "
                        variant="outlined"
                        onChange={(e) => dispatch({ type: 'confirm', payload: { value: e.target.value } })}
                    /> <br />
                    <Button
                        onClick={storageHandler}
                        variant="contained"
                        color="primary"
                        className={props.styles.root}//
                        style={{ margin: "10px" }}
                    > Submit <SaveIcon />
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={props.styles.root}//
                        style={{ margin: "10px" }}
                        onClick={() => props.logout()}
                    > Logout <Lock />
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={props.styles.root}//
                        style={{ margin: "10px" }}
                        onClick={() => props.viewData()}
                    > View <ViewAgenda />
                    </Button>
                </form>
            </div>
        </div>
    );
}
export default Register;