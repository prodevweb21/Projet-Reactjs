import React from 'react';
import { login } from '../utils/connexion';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div>
            
            
            <button onClick={() => handleLogin()}>Click here to log in</button>
             : <Link to="/loginpage">Connexion</Link>
            
        </div>
    );
};

export default SignIn;