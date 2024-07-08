import React, {useContext} from 'react';

import {UserWalletContext} from "../../../database/UserWalletProvider.jsx";
import {Item} from './Dashboard.jsx'

import { styled } from '@mui/material/styles';
import {Typography,Box,Grid} from'@mui/material'



const Wallet = () => {
    const {basicBank,cryptoBank, transactionBasicBank, transactionCryptoBank} = useContext(UserWalletContext)

    const handleClick=(item)=>{
        console.log('Sprzedane',item)
    }

    return (
        <Box sx={{ flexGrow: 1,mt:2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Item>Your Balance :{basicBank} $</Item>
                </Grid>

                    {cryptoBank.map((item,i)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                        <Item onClick={(e)=>handleClick(item,e)} >{item.name} - {item.value}
                            <Typography sx={{fontSize:'.5rem'}}>Price:{item.price} , Date:{item.date}</Typography>
                        </Item>
                        </Grid>
                    ))}


            </Grid>
        </Box>
    );
};

export default Wallet;