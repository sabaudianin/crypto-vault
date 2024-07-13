import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';

import {LoginContext} from '../../../database/LoginProvider.jsx';

import {BottomNavigation, BottomNavigationAction, Box, styled} from '@mui/material';
import {AddCard as AddCardIcon, Savings as SavingsIcon, GridView as GridViewIcon} from '@mui/icons-material';

const SimpleBottomNavigation = () => {
    const [value, setValue] = useState(0);

    const {isLogged} = useContext(LoginContext)
    return (
        <StyledBox>
            {isLogged && (
                <StyledBottomNavigation
                    showLabels
                    value={value}
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
            )}
        </StyledBox>);
};

//Styles
const StyledBox = styled(Box)({
    width: '100%',
});

const StyledBottomNavigation = styled(BottomNavigation)({
    background: 'inherit',
    position: 'fixed',
    bottom: '2vh', left: 0,
    width: '100%',
    fontFamily: 'inherit',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: 'var(--primary-color)', '&.Mui-selected': {
        color: 'var(--secondary-color)',
    }, '& .MuiBottomNavigationAction-label': {
        fontFamily: 'inherit', fontWeight: 500,
    },
});

export default SimpleBottomNavigation;

