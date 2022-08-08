import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import InputWithLabel from '../../shared/components/InputWithLabel';

const AddNewTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {token} = useContext(UserContext);

    const handleSubmit = () => {
         const todo = {
            description: description
         }
         console.log(todo)

         fetch('https://api-nodejs-todolist.herokuapp.com/task',{
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
         })
         .then(res => res.json())
         .then(data => {
            if(data.success){
                alert('task added');
                console.log(data.data);
            }else{
                console.log(data)
            }
         })
    }
    return (
        <div>
            <h1>Add New Todo</h1>
            <div>
            <InputWithLabel
        value={title}
        setValue={setTitle}
        label = 'Title'
        type='text'
        placeholder='Enter toto title'
        />
        <InputWithLabel
        value={description}
        setValue={setDescription}
        label = 'Description'
        type='text'
        placeholder='Description'
        />
         <CustomPrimaryButton
            label="Submit"
            additionalStyles={{marginTop: '30px'}}
            onClick={handleSubmit}
            />  
            </div>
        </div>
    );
};

export default AddNewTodo;