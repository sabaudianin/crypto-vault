import React from 'react';

import backgroundImage from '../../assets/images/Crypto Vault.png';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Logo = () => {
    return (
        <>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Box sx={{
                    height: '94vh',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: '1000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: '0.9s',

                }}>
                </Box>
            </Container>
        </>
    );
};

export default Logo;