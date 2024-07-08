import React from 'react';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import Login from '../account/Login';


const Wrapper = ({children}) => {
    return (
        <RetroContainer>
            {children}
        </RetroContainer>
    );
};

//STYLES

const RetroContainer = styled(Box)({
    width: '98vw',
    height: '98vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    overflowY: 'auto',
    padding: '0.5rem',
    border: '2px solid var(--primary-color)',
    color: 'var(--primary-color)',
    maskImage: 'linear-gradient(to bottom, #0005 50%, #000 50%)',
    maskSize: '100% 2px',
    textShadow: '0 0 0.5rem',
    boxShadow: 'inset 0 0 2rem',
    background: 'linear-gradient(0deg, #0000 10%, #fff1 90%, #0000 100%)',

    animation: 'crtAnimation 100s linear infinite',
    backgroundSize: '100% 80%',
    '@keyframes crtAnimation': {
        '0%': {
            backgroundPosition: '0 0'
        },
        '100%': {
            backgroundPosition: '0 10000%'
        }
    },
});

export default Wrapper;