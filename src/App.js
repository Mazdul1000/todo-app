import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';

function App() {
  return (
   <>
     <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
   </>
    
   
  );
}

export default App;
