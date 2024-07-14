import React, {useContext, useState} from 'react';
import CloseButton from "./CloseButton.jsx"
import {UserWalletContext} from "../contextApi/UserWalletProvider.jsx";

import {Box, Button, Grid, Typography, Stack, Slider, Input} from '@mui/material';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';

const Market = ({coin, onClose}) => {
    const {basicBank, transactionBasicBank, transactionCryptoBank} = useContext(UserWalletContext);
    const [amountToTrade, setAmountToTrade] = useState(0);



    const handleBuy = () => {
        const amountFloat = parseFloat(amountToTrade);
        if (amountFloat > 0 && amountFloat <= basicBank) {
            const coinsToBuy = amountFloat / coin.current_price;
            const newTransaction = {
                name: coin.name,
                value: coinsToBuy,
                price: coin.current_price,
                date: new Date().toLocaleString()
            };
            transactionBasicBank(-amountFloat);
            transactionCryptoBank(newTransaction);
            console.log('tranzakcja zrealizowana', coinsToBuy, amountFloat);
        }
    };

    const handleSliderChange = (event, newAmount) => {
        setAmountToTrade(newAmount);
    };

    const handleInputChange = (event) => {
        const value = event.target.value === '' ? 0 : Number(event.target.value);
        if (value <= basicBank) {
            setAmountToTrade(value);
        }
    };

    const checkBalance = () => {
        if (amountToTrade < 0) {
            setAmountToTrade(0);
        } else if (amountToTrade > basicBank) {
            setAmountToTrade(basicBank);
        }
    };

    return (
        <StyledGrid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <StyledBox>
                <CloseButton onClose={onClose}/>
                <StyledTypography variant="h6">Buy {coin.name}</StyledTypography>
                <StyledTypography variant="body1">Price: ${coin.current_price}</StyledTypography>
                <StyledTypography variant="body1">Wallet: ${basicBank}</StyledTypography>
                <Box>
                    <StyledTypography gutterBottom>
                        Amount
                    </StyledTypography>
                    <Stack>
                        <Slider
                            amount={typeof amountToTrade === 'number' ? amountToTrade : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            min={0}
                            max={basicBank}
                            sx={{color: 'red'}}
                        />
                    </Stack>
                    <Stack>
                        <TradeInput
                            value={amountToTrade}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={checkBalance}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: {basicBank},
                                type: 'number',
                            }}
                        />
                    </Stack>
                </Box>

                <Box>Total coins :
                    <StyledTypography>{(amountToTrade / coin.current_price).toFixed(7)}</StyledTypography>
                </Box>
                <Stack>
                    <BuyButton onClick={handleBuy}> Buy <CurrencyExchangeOutlinedIcon/> </BuyButton>
                </Stack>
            </StyledBox>
        </StyledGrid>
    );
};

//Styles
const StyledGrid = styled(Grid)({
    width: '70%',
    position: 'fixed',
    zIndex: 2,
    fontFamily: 'inherit',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&.MuiTypography-root': {fontFamily: 'inherit'},
});

const StyledBox = styled(Box)({
    padding: 70,
    border: '2px solid var(--primary-color)',
    color: 'var(--background-color)',
    maskImage: 'linear-gradient(to bottom, #0005 10%, #000 10%)',
    maskSize: '100% 2px',
    textShadow: '0 0 0.5rem',
    boxShadow: 'inset 0 0 2rem',
    background: 'linear-gradient(180deg, #fbe63f 100%, #D9BA05 100%, #b6a417 100%)',
    position: 'relative'
})
const StyledTypography = styled(Typography)({
    '&.MuiTypography-root': {fontFamily: 'inherit'},
    fontFamily: 'inherit',
    fontWeight: 500,
    fontSize: '1.5rem'
})


const BuyButton = styled(Button)({
    color: 'var(--secondary-color)',
    fontFamily: 'inherit',
    fontWeight: 900,
    '&:hover': {
        color: 'var(--tertiary-color)'
    },
})

const TradeInput = styled(Input)({
    fontFamily: 'inherit',
    outline: 'none',
    '& input[type=number]': {
        MozAppearance: 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'gray', // Kolor linii przed kliknięciem
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'gray', // Kolor linii przy najechaniu myszą
    },
    '& .MuiInput-underline.Mui-focused:before': {
        borderBottomColor: 'var(--primary-color)', // Kolor linii po kliknięciu
    }
})

Market.propTypes = {
    onClose: PropTypes.func.isRequired,
    coin: PropTypes.any.isRequired,
};

export default Market;