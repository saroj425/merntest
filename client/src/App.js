import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Image from './images/images.jpg';
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Route path="/login"><Login/></Route>
    <Route path="/signup"><Signup/></Route>
    <Route path="/dashboard"><Dashboard/></Route>
    </>
  )
}

export default App
