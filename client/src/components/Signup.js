import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Image from '../images/images.jpg';
import Navbar from './Navbar'

const Signup = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name:"", email:"",mobile:"",password:"",cpassword:"" });
    let name,value;
    const handleInputs = (e)=>{
        //console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
    const register = async (e)=>{
        e.preventDefault();
        const {name, email,mobile,password,cpassword} = user;
        // const res = await fetch("http://localhost:4000/signup",{
        //     // const res = await fetch("http://localhost:4000/signup",{
        //     method : 'POST',
        //     headers : {
        //         "Content-Type" : "application/json",
                
        //     },
        //     body:JSON.stringify({
        //         name, email,mobile,password,cpassword
        //     })

        // });
        const res = axios.post('http://localhost:4000/user', {
            name, email,mobile,password,cpassword
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Not saved");
        }else{
            window.alert("Saved Successfully");
            history.push('/login')

        }
    }

    return (
        <>
           <div className="login ">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <img src={Image} />
                    </div>
                    <div className="col-md-6 text-center login-form">
                        <h2>Welcome back!</h2>
                        <p>Please login to your account.</p>
                        <h2></h2>
                        <form method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control mb-4" placeholder="User Name" name="name" value={user.name} onChange={handleInputs} autoComplete="off"/>
                                <input type="text" className="form-control mb-4" placeholder="Email Id" name="email" value={user.email} onChange={handleInputs} autoComplete="off" />
                                <input type="text" className="form-control mb-4" placeholder="Mobile" name="mobile" value={user.mobile} onChange={handleInputs} autoComplete="off" />
                                <input type="password" className="form-control mb-4" placeholder="Password" name="password" value={user.password} onChange={handleInputs} autoComplete="off" />
                                <input type="password" className="form-control mb-4" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={handleInputs} autoComplete="off" />
                                <div className="row">
                                    <div className="col-md-6 mr-auto">
                                        {/* <input type="checkbox" name="remember" value="remember"/>
                                        <label for="vehicle1"> Remember me</label> */}
                                    </div>
                                    <div className="col-md-6 mr-auto">
                                        {/* <a href="">Forgot password</a> */}
                                    </div>
                                </div>
                                <input type="submit" className="btn-success btn-block formbtn mt-4" name="register" onClick={register} value="Register"/>
                                <a href="#" className="mt-5">Terms of use | Privacy ploicy</a>
                            </div>
                        </form>
                        {/* <div className="login-form">
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
