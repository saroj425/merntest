import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Image from '../images/images.jpg';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) =>{
        e.preventDefault();
        const res = await fetch('/signin',{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })

        });
        const data = res.json();
        if(res.status===400 || !data){
            window.alert("Invalid Credentials");
        }else{
            window.alert("Login Succesfull");
            history.push("/dashboard");
        }

    }
    return (
        <>  
            {/* <h2 className="text-center">Login</h2> */}
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
                                <input type="text" className="form-control mb-4" placeholder="User Name" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                <input type="text" className="form-control mb-4" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <div className="row">
                                    <div className="col-md-6 mr-auto">
                                        <input type="checkbox" name="remember" value="remember"/>
                                        <label for="vehicle1"> Remember me</label>
                                    </div>
                                    <div className="col-md-6 mr-auto">
                                        <a href="">Forgot password</a>
                                    </div>
                                </div>
                                <input type="submit" name="signin" id="signin" className="btn-success btn-block formbtn mt-4" onClick={loginUser}/>
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

export default Login
