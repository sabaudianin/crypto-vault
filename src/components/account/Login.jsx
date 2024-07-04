import React, {useState} from 'react';
import axios from 'axios';

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
    const [form, setForm] = useState({
        firstName: '',
        email: '',
        password: '',

    })
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        setSuccess([]);


        const API = `http://localhost:3000/users?email=${form.email}&password=${form.password}`
        axios.get(API)
            .then(response => {
                if (response.data.length > 0) {
                    setIsLogged(true)
                    setSuccess("ZALOGOWANO POMYŚLNIE")
                } else {
                    setErrors(prev => [...prev, 'Niepoprawne Dane logowania'])
                }
            })
            .catch(error => {
                console.log('bład logowania', error);
                setErrors(prev => [...prev, 'Błąd podczas próby logowania'])
            })
    };

    return (

        <Container>
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
                                             onChange={handleChange}
                            />

                            <StyledTextField required fullWidth
                                             name="password"
                                             label="Password"
                                             type="password"
                                             id="loginPassword"
                                             onChange={handleChange}
                            />
                            <StyledButton type="submit" fullWidth variant="contained">
                                Log In
                            </StyledButton>
                        </GridItems>
                    </GridContainer>
                </Box>
                <SignUpButton/>
                <Box>
                    <ul>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>
                    <ul>{success.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </Box>
            </StyledBox>
        </Container>

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