import React, { useContext, useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { validateLoginForm } from '../../shared/utils/validators';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { UserContext } from '../../contexts/UserContext';


const LoginPage = ({ login }) => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const {setUser, setToken, user, token} = useContext(UserContext);
  
    useEffect( () => {
        setIsFormValid(validateLoginForm({email, password}));

    },[email, password, setIsFormValid])


    const handleLogin = () => {
        const userDetails = {
            email,
            password
        }
        fetch('https://api-nodejs-todolist.herokuapp.com/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.user){
                setUser(data.user);
            const accessToken = data.token;
            localStorage.setItem('accessToken', accessToken);
            setToken(data.token)
            navigate('/')
            }else{
                alert(data)
            }
        })
    }

    return (
        <div>
            <AuthBox>
                <LoginPageHeader />
                <LoginPageInputs 
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
                <LoginPageFooter 
                isFormValid={isFormValid} handleLogin={handleLogin}
                />
            </AuthBox>
        </div>
    );
};



export default LoginPage;