import React from 'react';
import './Login.css';
import logo from '../Media/download.png';
import image from '../Media/download (1).png';
import {} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {auth, provider } from '../firebase';

function Login() {
const signIn = () =>{
auth.signInWithPopup(provider)
.then(result =>{
    console.log(result);
    
}).catch((error) => alert(error.message))
}

    return (
        <div className='login'>
            <div className='login_logo'>
<img src={logo} alt='' />
<img src={image} alt='' />
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
