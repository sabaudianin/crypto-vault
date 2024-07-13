import React from 'react';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";


const BasicPaperItem = ({children}) => {
    return (
        <Item>
            {children}
        </Item>
    );
};

const Item = styled(Paper)(({theme}) => ({
    width: '100%',
    background: 'inherit',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'var(--primary-color)',
    maskImage: 'linear-gradient(to bottom, #0005 50%, #000 50%)',
    maskSize: '100% 2px',
    textShadow: '0 0 0.5rem',
    border: '1px solid var(--primary-color)',
    cursor: 'pointer',
    borderRadius: '4px',
    '&:hover': {
        background: 'var( --secondary-color)'
    }
}));

BasicPaperItem.propTypes = {
    children: PropTypes.node.isRequired,
};
export default BasicPaperItem;