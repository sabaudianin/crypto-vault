import React from 'react';
import {Button, styled} from "@mui/material";
import PropTypes from 'prop-types';


const LoginButton = ({children, type, variant}) => {
    return (
        <StyledButton fullWidth type={type} variant={variant}>
            {children}
        </StyledButton>
    );
};


const StyledButton = styled(Button)({
    color: 'black',
    background: 'var(--primary-color)',
    fontFamily: 'inherit',
    '&:hover': {
        background: 'var(--secondary-color)'
    }
});

LoginButton.propTypes = {
    type: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
export default LoginButton;