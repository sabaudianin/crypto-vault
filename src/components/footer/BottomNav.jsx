import * as React from 'react';
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCardIcon from '@mui/icons-material/AddCard';
import SavingsIcon from '@mui/icons-material/Savings';
import GridViewIcon from '@mui/icons-material/GridView';
import {styled} from '@mui/system';

const StyledBox = styled(Box)({
    // position:'relative',

    width: '100%',

})


const StyledBottomNavigation = styled(BottomNavigation)({
    background: 'inherit',
    position: 'fixed',
    bottom: '2vh',
    width: '100%',



});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: 'yellow',


    '&.Mui-selected': {
        color: 'rgba(196,143,8,1)',

    },
    '& .MuiBottomNavigationAction-label': {
        fontFamily: 'inherit',
        fontWeight: 700,

    },
})


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <footer>
            <StyledBox>
                <StyledBottomNavigation
                    showLabels
                    value={value}
                    sx={{fontFamily:'inherit'}}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <StyledBottomNavigationAction
                        label="DASHBOARD"
                        icon={<GridViewIcon/>}
                        component={Link}
                        to="/"
                    />
                    <StyledBottomNavigationAction
                        label="TRADE"
                        icon={<AddCardIcon/>}
                        component={Link}
                        to="/trade"
                    />
                    <StyledBottomNavigationAction
                        label="WALLET"
                        icon={<SavingsIcon/>}
                        component={Link}
                        to="/wallet"

                    />
                </StyledBottomNavigation>
            </StyledBox>
        </footer>
    );
}


