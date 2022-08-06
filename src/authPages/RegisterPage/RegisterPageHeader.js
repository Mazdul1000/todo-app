import { Avatar, Typography } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegisterPageHeader = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'100%', alignItems: 'center'}}>
        <Typography variant='h5' sx={{color: 'black'}}>
            Create a new account
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
     </div>
    );
};

export default RegisterPageHeader;