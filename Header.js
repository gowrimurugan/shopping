import './Header.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Header (){
    const [logOut,setLogin] = useState(false);
    const navigate = useNavigate()
    const logInHandler = ()=>{
        navigate('/login')
        setLogin(true)
    }
    return(
        <header>
            <div className="header">
                <div className="header-wrapper">
                    <h1 className="logo">logo</h1>
                    <nav className="nav-items">
                        <input type='text' placeholder="Search..."/>
                        {logOut == true ? <div className='sign-up'>LogOut</div> : <div onClick={logInHandler} className='sign-up' >login</div> }
                        <div className="sign-up">SignUp</div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;