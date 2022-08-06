import React from 'react';
import { Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPageHeader = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'100%', alignItems: 'center'}}>
        <Typography variant='h5' sx={{color: 'black'}}>
            Welcome Back!
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
     </div>
    );
};

export default LoginPageHeader;