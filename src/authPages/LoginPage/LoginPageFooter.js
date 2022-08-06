import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import Redirect from '../../shared/components/Redirect';
import { Tooltip } from '@mui/material';

const LoginPageFooter = ({handleLogin, isFormValid}) => {
    const navigate = useNavigate();

    const getFormNotValidMessage= () => {
          return 'Please, enter email and password'
    }

    const getFormValidMessage = () => {
          return 'Press to Login'
    }
    const navigateToRegister = () => {
        navigate('/register')
    }
    return (
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimaryButton
            label="Log In"
            additionalStyles={{marginTop: '30px'}}
            disabled={!isFormValid}
            onClick={handleLogin}
            />     
        </div>
        </Tooltip>
        <Redirect 
        text= "Don't have an account?"
        redirectText = 'Create an Account'
        additionalStyles={{marginTop: '5px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}
        redirectHandler={navigateToRegister}
        />
        </>
    );
};

export default LoginPageFooter;