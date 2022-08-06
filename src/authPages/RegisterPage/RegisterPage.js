import React, { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { validateRegisterForm } from '../../shared/utils/validators';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect( () => {
        setIsFormValid(validateRegisterForm({email, password, username}));

    },[email, password, username, setIsFormValid])

    const handleRegister = () => {
        console.log(email)
        console.log(password)
        console.log(username)
        console.log('logging in')
    }
    return (
        <div>
        <AuthBox>
            <RegisterPageHeader />
            <RegisterPageInputs 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              username={username}
              setUsername={setUsername}
            />
            <RegisterPageFooter 
            isFormValid={isFormValid} handleRegister={handleRegister}
            />
        </AuthBox>
    </div>
    );
};

export default RegisterPage;