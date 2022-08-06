import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({email, setEmail, password, setPassword}) => {
    return (
        <>
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
        type='text'
        placeholder='Password'
        />
        
        </>
    );
};

export default LoginPageInputs;