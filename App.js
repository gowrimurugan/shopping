import './App.css';
import CategoryHolder from './components/CategoryHolder/CategoryHolder';
import Header from './components/Header/Header';
import LogIn from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductHolder from './components/ProductHolder/ProductHolder';
import {AppContext} from './components/Context/Context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);;
  function login() {
    setIsLoggedIn(true)
  }
  function logout() {
    setIsLoggedIn(false)
  }
  return (
    <div className="app">
      <div className='app-container'>
        <AppContext.Provider value={{ isLoggedIn }}>
          {isLoggedIn && <Header logout={logout} isLoggedIn={isLoggedIn}></Header>}
          {isLoggedIn ? <CategoryHolder></CategoryHolder> : <LogIn login={login}></LogIn>}
            <Routes>
              <Route path='/:category' element= {<ProductHolder/>}></Route>
            </Routes>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
