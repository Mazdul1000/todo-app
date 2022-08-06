
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const RedirectText = styled('span')({
    color: 'black',
    fontWeight: 500,
    cursor: 'pointer'   
})

const Redirect = ({
    text,
    redirectText,
    additionalStyles,
    redirectHandler
}) => {
    return (
        <Typography 
        sx={{color: 'black'}}
        style={additionalStyles ? additionalStyles: {}}
        >
        {text}
        <RedirectText onClick={redirectHandler}>
            {redirectText}
        </RedirectText>
        </Typography>
    );
};

export default Redirect;