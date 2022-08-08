import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import auth from '../firebase.init';
import AddNewTodo from './Todos/AddNewTodo';
import Todos from './Todos/Todos';

const Dashboard = () => {

    const {user, setUser} = useContext(UserContext);

    console.log(user);
    const handleLogout = () => {
       setUser('Hello world');
       console.log(user);
    }

    return (
        <div>
           <h1>Dashboard</h1> 
           <div>
            <AddNewTodo></AddNewTodo>
           </div>
           
           <div>
            <Todos />
           </div>

        </div>
    );
};

export default Dashboard;