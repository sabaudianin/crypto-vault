import * as React from 'react';
import {styled} from '@mui/system';
import Container from '@mui/material/Container';

export default function SimpleContainer({children,style}) {

    const StyledContainer=styled(Container)({
        overflowY: 'auto' ,
        marginBottom:'8vh'
    })

    return (
        <React.Fragment>

            <StyledContainer maxWidth="xl" style={style}>
                {children}
            </StyledContainer>
        </React.Fragment>
    );
}
