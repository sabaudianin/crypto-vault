import React from 'react';
import {styled, Typography} from "@mui/material";
import PropTypes from 'prop-types';

const FormTitle = ({children, component, variant}) => {
    return (
        <StyledTypography component={component} variant={variant}>
            {children}
        </StyledTypography>
    );
};


const StyledTypography = styled(Typography)({
    fontFamily: 'inherit',
    margin: '55px 0 10px'
});

FormTitle.propTypes = {
    component: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default FormTitle;