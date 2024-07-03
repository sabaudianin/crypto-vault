import React,{useState,useEffect} from 'react';

import Logo from './logo.jsx';

import {styled} from '@mui/system';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {

    // const [showLogo, setShowLogo] = useState(true);
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowLogo(false);
    //     }, 3000);
    //
    //     return () => clearTimeout(timer);
    // }, []);

    const StyledContainer=styled(Container)({

        overflowY: 'auto' ,
        marginBottom:'8vh',
        marginTop:'.5vh',
        display:'flex',
        justifyContent:'center',
        // alignItems:'center',


    })

    return (
        <React.Fragment>
            <StyledContainer maxWidth="xl" >
                {/*{showLogo && <Logo />}*/}
                {children}
            </StyledContainer>
        </React.Fragment>
    );
}
