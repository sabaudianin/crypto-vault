import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';


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