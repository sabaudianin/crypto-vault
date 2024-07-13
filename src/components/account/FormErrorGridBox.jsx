import React from 'react';
import PropTypes from 'prop-types';
import {Grid, styled} from "@mui/material";


const FormErrorGridBox = ({children}) => {
    return (
        <GridItems>
            {children}
        </GridItems>
    );
};

const GridItems = styled(Grid)({
    boxShadow: 'inset 0 0 2rem', border: '2px solid var(--primary-color)'
})

FormErrorGridBox.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FormErrorGridBox;