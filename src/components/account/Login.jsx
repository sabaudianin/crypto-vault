import React, {useState, useContext} from 'react';
import {LoginContext} from '../../../database/LoginProvider.jsx';
import SignUpButton from "./SignUpButton.jsx";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';

const LoginForm = () => {
    const {isLogged, logIn, errors, success, setErrors} = useContext(LoginContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = [];
        if (!form.email) {
            newErrors.push('Email jest wymagany');
        }
        if (!form.password) {
            newErrors.push('Password jest wymagane');
        }
        if (newErrors.length > 0) {
            setErrors(newErrors);
        } else {
            setErrors([]);
            logIn(form.email, form.password); // Przekaż email i password do logIn
        }
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
                                             name="email" // Upewnij się, że name jest poprawny
                                             value={form.email}
                                             onChange={handleChange}
                            />
                            <StyledTextField required fullWidth
                                             name="password"
                                             label="Password"
                                             type="password"
                                             id="loginPassword"
                                             value={form.password}
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
    );
};

// STYLES
const StyledBox = styled(Box)({
    textAlign: 'center', width: '100%', fontFamily: 'inherit'
});

const StyledTypography = styled(Typography)({
    fontFamily: 'inherit', mb: 3
});

const GridContainer = styled(Grid)({
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
});

const GridItems = styled(Grid)({
    boxShadow: 'inset 0 0 2rem', border: '2px solid var(--primary-color)'
});

const StyledTextField = styled(TextField)({
    background: 'var(--primary-color)', '& .MuiInputLabel-root': {
        fontFamily: 'inherit'
    }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--secondary-color)'
    }, '&:focus-within': {
        '& .MuiInputLabel-root': {
            color: 'black'
        }
    }
});

const StyledButton = styled(Button)({
    mt: 3, mb: 2, color: 'black', background: 'var(--primary-color)', fontFamily: 'inherit',
    '&:hover': {
        background: 'var(--secondary-color)'
    }
});

export default LoginForm;
