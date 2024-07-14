import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {UserWalletContext} from "../contextApi/UserWalletProvider.jsx";
import FormBox from "./FormBox.jsx"
import LoginButton from "./LoginButton.jsx"
import StyledInput from "./StyledInput.jsx";
import FormTitle from "./FormTitle.jsx";
import FormErrorGridBox from "./FormErrorGridBox.jsx"
import {Grid, FormControlLabel, Checkbox, Box, styled} from '@mui/material';
import axios from 'axios';


const SignUpForm = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState([])
    const {setUserWallet} = useContext(UserWalletContext);

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        condition: false,
    })

//Handling 'inputs'
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

//VALIDATION
    const validationForm = () => {

        let formErrors = [];
        let isValid = true;

        if (form.firstName.length < 2) {
            formErrors.push('Imie musi byc dłuższe niż 2 znaki.');
            isValid = false;
        }
        if (form.lastName.length <= 2) {
            formErrors.push('Nazwisko musi byc dłuższe niż 2 znaki.');
            isValid = false;
        }
        if (!(form.email.includes("@") && form.email.includes(".") && form.email.length > 5)) {
            formErrors.push('Niepoprawny adres Email.');
            isValid = false;
        }
        if (!(form.password === form.repeatPassword && form.password.length > 0 && form.repeatPassword.length > 0)) {
            formErrors.push('Hasła nie sa takie same i nie mogą być puste.');
            isValid = false;
        }
        if (!(form.password.length > 4)) {
            formErrors.push('Hasło jest za krótkie,min 5 znaków.');
            isValid = false;
        }
        if (!form.condition) {
            formErrors.push('Musisz zaakceptowac warunki.');
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    }

// Handling Button
    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validationForm();

        if (isValid) {
            setErrors([]);
            setSuccess([]);
            const initialBasicBank = 100_000;
            const user = {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                password: form.password,
                basicBank: initialBasicBank,
                cryptoBank: [],
            }

            axios.get(`http://localhost:3000/users?email=${form.email}`)
                .then(response => {
                    if (response.data.length > 0) {
                        setErrors(prev => [...prev, 'Email już istnieje']);
                    } else {
                        axios.post('http://localhost:3000/users', user)
                            .then(response => {
                                console.log('Dane wysłane pomyślnie:', response.data);
                                setUserWallet(user);
                                setSuccess(prev => [...prev, 'Konto utworzone,możesz się zalogować']);
                                navigate('/')
                            })
                            .catch(error => {
                                console.error('Błąd podczas wysyłania danych:', error);
                                setErrors(prev => [...prev, 'Błąd podczas wysyłania danych:'])
                            });
                    }
                })
                .catch(error => {
                    console.error('Błąd podczas sprawdzania emaila:', error);
                    setErrors(prev => [...prev, 'Błąd podczas wysyłania danych:'])
                });
        } else {
            console.log("Formularz jest nieprawidłowy");
        }
        console.log("rejestracja")
    };

    return (

        <FormBox>
            <FormTitle component={"h2"} variant={"h3"}>
                Sign up
            </FormTitle>
            <Box component='form' noValidate onSubmit={handleSubmit}>
                <FormErrorGridBox>
                    <StyledInput required fullWidth
                                 name={"firstName"}
                                 label={"First Name"}
                                 variant={"outlined"}
                                 value={form.firstName}
                                 onChange={handleChange}
                    />
                    <StyledInput required fullWidth
                                 label={"Last Name"}
                                 name={"lastName"}
                                 value={form.lastName}
                                 onChange={handleChange}
                    />
                    <StyledInput required fullWidth
                                 label={"Email Address"}
                                 name={"email"}
                                 value={form.email}
                                 onChange={handleChange}
                    />
                    <StyledInput required fullWidth
                                 name={"password"}
                                 label={"Password"}
                                 type={"password"}
                                 value={form.password}
                                 onChange={handleChange}
                    />
                    <StyledInput required fullWidth
                                 name={"repeatPassword"}
                                 label={"Repeat Password"}
                                 type={"password"}
                                 value={form.repeatPassword}
                                 onChange={handleChange}
                    />
                    <StyledFormControlLabel
                        control={<StyledCheckbox value="condition" name="condition"
                                                 checked={form.condition} onChange={handleChange}/>}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                    <LoginButton type="submit" fullWidth variant="contained">
                        Sign Up
                    </LoginButton>
                    <Box>
                        <ul>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>
                        <ul>{success.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </Box>
                </FormErrorGridBox>
            </Box>
        </FormBox>

    )
}

//STYLES

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


export default SignUpForm;