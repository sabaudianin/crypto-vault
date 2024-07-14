import React from 'react';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";


import PropTypes from 'prop-types';


const GridCentered = ({children}) => {
    return (
        <StyledGrid item xs={12}>
            {children}
        </StyledGrid>
    );
};


const StyledGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',

});


GridCentered.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GridCentered;