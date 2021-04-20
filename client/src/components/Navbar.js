import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/signup">Signup</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/logout">Logout</a>
                    </li>

                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
