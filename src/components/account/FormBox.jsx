import React from 'react';
import {Box, styled} from "@mui/material";

import PropTypes from 'prop-types';

const FormBox = ({children}) => {
    return (

        <StyledBox>{children}</StyledBox>
    );
};


const StyledBox = styled(Box)({
    maxWidth: '640px',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'inherit'
});

FormBox.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FormBox;