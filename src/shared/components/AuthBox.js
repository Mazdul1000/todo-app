import { styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    margin: 0
})

const AuthBox = (props) => {
    return (
       <BoxWrapper>
        <Box
            sx={{
                width:500,
                height:400,
                bgcolor: 'lightblue',
                borderRadius: '5px',
                boxShadow: '0 2px 10px 0 / 20%',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px'
            }}
        >
            {props.children}
        </Box>
       </BoxWrapper>
    );
};

export default AuthBox;