import React from 'react';
import './App.css';

const Login = (props) => {

    const {
        email, 
        setEmail,
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return(
        <sction className = "login">
           <div className = "loginConatiner">
               <label>Username</label>
               <input 
                type = "Text" 
                autoFocus 
                required 
                value = {email} 
                onChange = {(e) => setEmail(e.target.value)} 
               />

               <p className = "errorMsg">{emailError}</p>
               <label>Password</label>
               <input 
               type = "password"
               required
               value={password}
               onChange= {(e) => setPassword(e.target.value)}
               />
               
                <p className= "errorMsg">{passwordError}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <button  onClick= {handleLogin}>Sign in</button>
                        <p>Don't have an account ? 
                        <span onClick= {() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>

                    ) : (
                        <>
                        <button onClick= {handleSignup}>Sign Up</button>
                        <p>Have an Account ?
                        <span onClick= {() => setHasAccount(!hasAccount)}>Sign ip</span></p>
                        </>

                    )}
                    
                </div>

           </div>
        </sction>
    )
}

export default Login;;