import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserContext } from '../../contexts/UserContext';
import Todo from './Todo';

const Todos = () => {
    const [todo, setTodos] = useState(null);

    const { data:todos,refetch, isLoading } = useQuery('todos', () => fetch('https://api-nodejs-todolist.herokuapp.com/task',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(todos)
    return (
        <div>
          {/*  {
            todos.map(todo => <Todo key={todo._id} todo={todo}></Todo>)
           }  */}
        </div>
    );
};

export default Todos;