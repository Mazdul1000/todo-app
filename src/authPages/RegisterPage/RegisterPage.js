import React, { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { validateRegisterForm } from '../../shared/utils/validators';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import { useNavigate } from 'react-router-dom';


const RegisterPage = ({register}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);


    // const token = useRegisterToken(user)

  


    useEffect( () => {
        setIsFormValid(validateRegisterForm({email, password, username}));

    },[email, password, username, setIsFormValid])

   

    const handleRegister = async () => {

       const userDetails = {
        email: email,
        password: password,
        name:username
       }

      fetch('https://api-nodejs-todolist.herokuapp.com/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data.user){
            navigate('/login');
            alert("you account has been created")
        }else{
            alert(data);
        }
    }
        )

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