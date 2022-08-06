import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({email, setEmail, password, setPassword, username, setUsername}) => {
    return (
        <>
        
         <InputWithLabel
        value={username}
        setValue={setUsername}
        label = 'Username'
        type='text'
        placeholder='Username'
        />
        <InputWithLabel
        value={email}
        setValue={setEmail}
        label = 'Email'
        type='text'
        placeholder='Enter your email'
        />
        <InputWithLabel
        value={password}
        setValue={setPassword}
        label = 'Password'
        type='password'
        placeholder='Password'
        />
        
        </>
    );
};

export default RegisterPageInputs;