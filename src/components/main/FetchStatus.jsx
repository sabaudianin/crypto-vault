import React from 'react';
import {CircularProgress} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import {Box, Typography, styled} from '@mui/material';
import PropTypes from 'prop-types';

const FetchStatus = ({loading, error}) => {
    if (loading) {
        return (
            <StyledBox>
                <CircularProgress color="warning"/>
            </StyledBox>
        );
    }

    if (error) {
        return (
            <StyledBox>
                <ErrorOutlineIcon color="error" style={{fontSize: 50}}/>
                <Typography variant="h6" color="error">
                    Error: {error.message}
                </Typography>
            </StyledBox>
        );
    }

    return null;
};

const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh"
})
FetchStatus.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
};

export default FetchStatus;