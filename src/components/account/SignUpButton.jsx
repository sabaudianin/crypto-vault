import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';

const StyledButton =styled(Button)({
    fontFamily:'inherit'
})

const SignUpButton = () => {
    return (
        <StyledButton component={Link} to="/signUp" variant="inherit">
            {"Don't have an account? Sign Up"}
        </StyledButton>
    );
};


export default SignUpButton;