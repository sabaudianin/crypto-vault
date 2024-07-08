import React from 'react';
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCardIcon from '@mui/icons-material/AddCard';
import SavingsIcon from '@mui/icons-material/Savings';
import GridViewIcon from '@mui/icons-material/GridView';
import {styled} from '@mui/system';

const SimpleBottomNavigation = () => {
    const [value, setValue] = React.useState(0);

    return (<StyledBox>
        <StyledBottomNavigation
            showLabels
            value={value}
            sx={{fontFamily: 'inherit'}}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <StyledBottomNavigationAction
                label="DASHBOARD"
                icon={<GridViewIcon/>}
                component={Link}
                to="/dashboard"
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
    </StyledBox>);
};
//Styles
const StyledBox = styled(Box)({
    width: '100%',
});

const StyledBottomNavigation = styled(BottomNavigation)({
    background: 'inherit', position: 'fixed', bottom: '2vh', left: 0, width: '100%',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: 'var(--primary-color)', '&.Mui-selected': {
        color: 'var(--secondary-color)',
    }, '& .MuiBottomNavigationAction-label': {
        fontFamily: 'inherit', fontWeight: 500,
    },
});

export default SimpleBottomNavigation;

