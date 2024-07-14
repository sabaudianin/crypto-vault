import React from 'react';
import {TextField, styled} from '@mui/material';

import PropTypes from 'prop-types';

const StyledInput = ({label, name, value, onChange, type}) => {

    const handleMenuChange=(e)=>{
        if (typeof onChange === 'function') {
            onChange(e);
        } else (console.log('onChange w Login nie jest funkcja'))
    }

    return (
        <StyledTextField fullWidth required
                         label={label}
                         name={name}
                         value={value}
                         onChange={handleMenuChange}
                         type={type}
        />
    );
};

//STYLES
const StyledTextField = styled(TextField)({
    background: 'var(--primary-color)',
    fontFamily: 'inherit',
    '& .MuiOutlinedInput-root': {
        fontFamily: 'inherit ',
    },
    '& .MuiInputLabel-root': {
        fontFamily: 'inherit'
    }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--secondary-color)'
    }, '&:focus-within': {
        '& .MuiInputLabel-root': {
            color: 'black'
        }
    }
});


StyledInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default StyledInput;