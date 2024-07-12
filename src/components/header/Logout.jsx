import React, {useContext} from 'react';

import {LoginContext} from '../../../database/LoginProvider.jsx';
import {IconButton} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


const Logout = () => {
    const {logOut, isLogged} = useContext(LoginContext)
    return (
        <IconButton
            onClick={logOut}
            disabled={!isLogged}
        >
            <LogoutIcon/>
        </IconButton>

    )
}
export default Logout;