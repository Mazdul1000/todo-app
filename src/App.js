import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import RequireAuth from './authPages/RequireAuth/RequireAuth';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  return (
   <>
   <UserContext.Provider value={{user, setUser, token, setToken}}>
   <Routes>
      
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
    
      
    </Routes>
   </UserContext.Provider>
     
   </>
    
   
  );
}

export default App;
