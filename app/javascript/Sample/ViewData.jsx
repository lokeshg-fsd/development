import React, { useState } from 'react';
import './Report.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined'
import { ArrowLeft, Lock } from '@material-ui/icons';
const ViewData = (props) => {
    const [isDelete, setDelete] = useState(true);
    const deleteReport = (report) => {
        setDelete(true);
        var newdata = [];
        const data = JSON.parse(localStorage.getItem("data"));
        data.map((obj) => {
            if (obj["username"] === report["username"]) {
            }
            else {
                newdata.push(obj);
            }
        });
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(newdata));
        setDelete(true);
        alert("Your Data has Been Deleted");
    };
    const isDeleted = () => {
        alert("Your Data has Been Deleted");
        setDelete(true);
    }
    return (
        <div>{isDelete ?
            <table className="customers">
                <tr>
                    <th> Username </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Age   </th>
                    <th> Phone Number </th>
                    <th> Password </th>
                    <th> Confirm Password </th>
                    <th>  </th>
                    <th>  </th>
                </tr>
                {JSON.parse(localStorage.getItem("data")).map((report) => {
                    return (
                        <tr>
                            <td>  {report["username"]} </td>
                            <td> {report["name"]} </td>
                            <td>{report["email"]} </td>
                            <td>{report["age"]} </td>
                            <td>  {report["phone"]} </td>
                            <td>{report["password"]}</td>
                            <td> {report["password"]} </td>
                            <td > 
                                <Button 
                                onClick={() => props.editHandler(report)}
                                     variant="contained"
                                     color="primary"
                                     style={{ margin: "10px" }}
                                > <EditIcon /> </Button>
                            </td>
                            <td
                                onClick={() => deleteReport(report)}
                                title="Delete this Record">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ margin: "10px" }}
                                > <DeleteIcon /> </Button>
                            </td>
                        </tr>
                    )
                })
                }
            </table> : isDeleted
        }
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "10px" }}
                    onClick={() => props.return()}
                >  <ArrowLeftOutlined /> </Button>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "10px" }}
                    onClick={() => props.logout()}
                    title="Logout of the App"
                 > <Lock/>  </Button>
            </div>
        </div >
    )
}
export default ViewData;