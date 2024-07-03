import React, {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';


const SignUpForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

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
        console.log(form);
        const user = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
        }

        axios.post('http://localhost:3000/users', user)
            .then(response => {
                console.log('Dane wysłane pomyślnie:', response.data);

            })
            .catch(error => {
                console.error('Błąd podczas wysyłania danych:', error);

            });
    };
    return (
        <Container>
            <StyledBox>
                <StyledTypography component="h2" variant="h3">
                    Sign up
                </StyledTypography>

                <Box component='form' noValidate onSubmit={handleSubmit}>
                    <GridContainer container>
                        <GridItems item xs={12} sm={6}>

                            <StyledTextField required fullWidth
                                             name="firstName"
                                             id="firstName"
                                             label="First Name"
                                             variant="outlined"
                                             value={form.firstName}
                                             onChange={handleChange}
                            />

                            <StyledTextField required fullWidth
                                             id="lastName"
                                             label="Last Name"
                                             name="lastName"
                                             value={form.lastName}
                                             onChange={handleChange}
                            />

                            <StyledTextField required fullWidth
                                             id="email"
                                             label="Email Address"
                                             name="email"
                                             value={form.email}
                                             onChange={handleChange}
                            />

                            <StyledTextField required fullWidth
                                             name="password"
                                             label="Password"
                                             type="password"
                                             id="password"
                                             value={form.password}
                                             onChange={handleChange}
                            />

                            <StyledTextField required fullWidth
                                             name="repeatPassword"
                                             label="Repeat Password"
                                             type="password"
                                             id="repeatPassword"
                            />

                            <StyledFormControlLabel
                                control={<StyledCheckbox value="allowExtraEmails"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />

                            <StyledButton type="submit" fullWidth variant="contained">
                                Sign Up
                            </StyledButton>

                        </GridItems>
                    </GridContainer>
                </Box>
            </StyledBox>
        </Container>
    )
}

//STYLES
const StyledBox = styled(Box)({
    textAlign: 'center',
    width: '100%',
    fontFamily: 'inherit'
})

const StyledTypography = styled(Typography)({
    fontFamily: 'inherit', mb: 3
})

const GridContainer = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
})
const GridItems = styled(Grid)({
    boxShadow: 'inset 0 0 2rem', border: '2px solid var(--primary-color)'
})
const StyledTextField = styled(TextField)({
    background: 'var(--primary-color)',
    '& .MuiInputLabel-root': {
        fontFamily: 'inherit',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--secondary-color)',
    },
    '&:focus-within': {
        '& .MuiInputLabel-root': {
            color: 'black',
        },
    },
});

const StyledFormControlLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label': {
        fontFamily: 'inherit',
    },
    '& .MuiCheckbox-root': {
        color: 'var(--primary-color)',
    },
});

const StyledCheckbox = styled(Checkbox)({
    '&.Mui-checked': {
        color: 'var(--primary-color)',
    },
});

const StyledButton = styled(Button)({
    mt: 3,
    mb: 2,
    color: 'black',
    background: 'var(--primary-color)',
    fontFamily: 'inherit',

    '&:hover': {
        background: 'var(--secondary-color)',
    },
},)

export default SignUpForm;