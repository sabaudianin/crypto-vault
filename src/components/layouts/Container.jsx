import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Logo from './logo.jsx';

import {styled} from '@mui/system';
import Container from '@mui/material/Container';
import {UserWalletProvider} from "../../../database/UserWalletProvider.jsx";

const SimpleContainer = ({children}) => {

    return (
        <React.Fragment>
            <StyledContainer maxWidth="xl">
                {/*{showLogo && <Logo />}*/}
                {children}
            </StyledContainer>
        </React.Fragment>
    );
}

const StyledContainer = styled(Container)({

    overflowY: 'auto',
    marginBottom: '8vh',
    marginTop: '.5vh',
    display: 'flex',
    justifyContent: 'center',
    // alignItems:'center',

// const [showLogo, setShowLogo] = useState(true);
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowLogo(false);
    //     }, 3000);
    //
    //     return () => clearTimeout(timer);
    // }, []);

})


SimpleContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
export default SimpleContainer;