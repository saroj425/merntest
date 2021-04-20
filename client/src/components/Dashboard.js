import React from 'react';
import { useHistory } from 'react-router';
import Navbar from './Navbar';

const Dashboard = () => {
    const history = useHistory();
    const callDashboard= async()=>{
        try{

        }catch(e){
            
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table text-center">
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile</td>
                            <td><a href="/">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile</td>
                            <td><a href="/">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile</td>
                            <td><a href="/">Delete</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Dashboard
