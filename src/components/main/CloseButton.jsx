import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {Button, styled} from '@mui/material';
import PropTypes from 'prop-types';


const CloseButton = ({onClose}) => {

    const handleClose = () => {
        if (typeof handleClose === 'function') {
            onClose();
        } else (console.log('handleClose X nie jest funkcja'))
    }
    return (
        <ClosingButton onClick={handleClose}> <CloseOutlinedIcon/>
        </ClosingButton>
    );
};

const ClosingButton = styled(Button)({
    position: 'absolute',
    fontWeight: 900,
    top: 0,
    right: 0,
    color: 'var(--secondary-color)',
    '&:hover': {
        color: 'var(--tertiary-color)'
    },
})

CloseButton.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default CloseButton;