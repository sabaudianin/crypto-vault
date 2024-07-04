import React, {useState} from 'react';


import SignUpButton from "./SignUpButton.jsx";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';


const LoginForm = () => {

    const [isLogged, setIsLogged] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'), password: data.get('password'),
        });
        setIsLogged(true)
    };

    return (
        isLogged
            ? (
                <Container>
                    <StyledBox>
                        <StyledTypography component="h2" variant="h3">
                            WITAJ HODLerze :)
                        </StyledTypography>
                    </StyledBox>
                </Container>
            )
            : (
                <Container >
                    <StyledBox>

                        <StyledTypography component="h2" variant="h3">
                            Log In
                        </StyledTypography>

                        <Box component='form' noValidate onSubmit={handleSubmit}>
                            <GridContainer container>
                                <GridItems item xs={12} sm={6}>
                                    <StyledTextField required fullWidth
                                                     id="email"
                                                     label="Email Address"
                                                     name="loginEmail"
                                    />

                                    <StyledTextField required fullWidth
                                                     name="password"
                                                     label="Password"
                                                     type="password"
                                                     id="loginPassword"
                                    />
                                    <StyledButton type="submit" fullWidth variant="contained">
                                        Log In
                                    </StyledButton>
                                </GridItems>
                            </GridContainer>
                        </Box>
                        <SignUpButton/>
                    </StyledBox>
                </Container>
            )
    )
}

//STYLES
const StyledBox = styled(Box)({
    textAlign: 'center', width: '100%', fontFamily: 'inherit'
})

const StyledTypography = styled(Typography)({
    fontFamily: 'inherit', mb: 3
})

const GridContainer = styled(Grid)({
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
})
const GridItems = styled(Grid)({
    boxShadow: 'inset 0 0 2rem', border: '2px solid var(--primary-color)'
})
const StyledTextField = styled(TextField)({
    background: 'var(--primary-color)', '& .MuiInputLabel-root': {
        fontFamily: 'inherit',
    }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--secondary-color)',
    }, '&:focus-within': {
        '& .MuiInputLabel-root': {
            color: 'black',
        },
    },
});


const StyledButton = styled(Button)({
    mt: 3, mb: 2, color: 'black', background: 'var(--primary-color)', fontFamily: 'inherit',

    '&:hover': {
        background: 'var(--secondary-color)',
    },
},)

export default LoginForm;