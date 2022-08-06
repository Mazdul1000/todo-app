import { Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import Redirect from '../../shared/components/Redirect';

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
    const navigate = useNavigate();

    const getFormNotValidMessage= () => {
          return 'Please, enter email and password'
    }

    const getFormValidMessage = () => {
          return 'Press to Login'
    }
    const navigateToLogin = () => {
        navigate('/login')
    }
    return (
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimaryButton
            label="Register"
            additionalStyles={{marginTop: '30px'}}
            disabled={!isFormValid}
            onClick={handleRegister}
            />     
        </div>
        </Tooltip>
        <Redirect 
        text= "Already have an account?"
        redirectText = 'Please, Log in'
        additionalStyles={{marginTop: '5px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}
        redirectHandler={navigateToLogin}
        />
        </>
    );
};

export default RegisterPageFooter;