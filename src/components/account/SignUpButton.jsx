import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, styled} from '@mui/material';


const SignUpButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };
    return (
        <StyledButton onClick={handleClick} variant="inherit">
            {"Don't have an account? Sign Up"}
        </StyledButton>
    );
};

const StyledButton = styled(Button)({
    fontFamily: 'inherit'
})

export default SignUpButton;