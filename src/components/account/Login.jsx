import React, {useState, useContext} from 'react';

import {LoginContext} from '../../../database/LoginProvider.jsx';
import SignUpButton from "./SignUpButton.jsx";
import StyledInput from "./StyledInput.jsx";
import FormBox from "./FormBox.jsx"
import FormTitle from "./FormTitle.jsx";
import LoginButton from "./LoginButton.jsx"
import FormErrorGridBox from "./FormErrorGridBox.jsx"

import {Box} from '@mui/material';


const LoginForm = () => {
    const {logIn, errors, success, setErrors} = useContext(LoginContext);
    const [form, setForm] = useState({
        email: '', password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevState) => ({
            ...prevState, [name]: value,
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
            logIn(form.email, form.password);
        }
    };

    return (

        <FormBox>
            <FormTitle component={"h2"} variant={"h3"}>
                Log In
            </FormTitle>
            <Box component='form' noValidate onSubmit={handleSubmit}>
                <FormErrorGridBox>
                    <StyledInput
                        label={"Email Address"}
                        name={"email"}
                        type={"email"}
                        value={form.email}
                        onChange={handleChange}
                    />
                    <StyledInput
                        name={"password"}
                        label={"Password"}
                        type={"password"}
                        value={form.password}
                        onChange={handleChange}
                    />
                    <LoginButton type="submit" variant="contained">
                        Log In
                    </LoginButton>
                </FormErrorGridBox>
            </Box>
            <SignUpButton/>
            <Box>
                <ul>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>
                <ul>{success.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </Box>
        </FormBox>

    );
};


export default LoginForm;
