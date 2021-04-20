import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
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
