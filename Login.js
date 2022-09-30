// import './Login.css';
import { useState } from 'react';
function LogIn(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    function emailHandler(e) {
        setUserEmail(e.target.value);
    }
    function passwordHandler(e) {
        setUserPassword(e.target.value);
    }
    function logInHandler(e) {
        e.preventDefault()
        if (userEmail.includes('@') && userPassword.length > 6) {
            props.login()
        } else {
            alert("please enter the correct email & password")
        }
        setUserEmail('')
        setUserPassword('')
    }
    return (
        <div>
            <div className='login-container'>
                <div className='login-wrapper'>
                    <form className='logInHandler' onSubmit={logInHandler}>
                        <h1>LOGIN</h1>
                        <label>Username</label>
                        <input className='email' type='email' onChange={emailHandler} value={userEmail} /><br />
                        <label>Password</label>
                        <input className='email' type='text' onChange={passwordHandler} value={userPassword} /><br />
                        <input className='submit' type='submit' value='login' />
                        {/* <a href='#' className='social'><i className='f09a'></i></a> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;