import React, {useContext, useState} from 'react';
import {DataContext} from '../../../database/DataFetch.jsx';
import {UserWalletContext} from "../../../database/UserWalletProvider.jsx";
import {Item} from './Dashboard.jsx'

import {styled} from '@mui/material/styles';
import {Typography, Box, Grid, Modal, Slider, Stack, Button} from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const Wallet = () => {
    const {basicBank, cryptoBank, transactionBasicBank, transactionCryptoBank} = useContext(UserWalletContext);
    const {data} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState('');
    const [selectedCoinPrice, setSelectedCoinPrice] = useState(null);
    const [sellAmount, setSellAmount] = useState(0);
    const [cashToBank, setCashToBank] = useState(0);


    const handleSell = () => {
        transactionBasicBank(cashToBank);

        const cryptoBankCopy = [...cryptoBank];
        const cryptoIndex = cryptoBankCopy.findIndex(crypto => crypto.date === selectedCoin.date);
        if (cryptoIndex !== -1) {
            const newTransaction = {
                ...cryptoBankCopy[cryptoIndex],
                value: -sellAmount
            };
            transactionCryptoBank(newTransaction);
        }
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCoinPrice(null);
        setSellAmount(0);
        setCashToBank(0);
    };

    const handleOpen = (item) => {
        const coinDetails = data.find(coin => coin.name === item.name)
        setOpen(true);
        setSelectedCoinPrice(coinDetails);
        setSelectedCoin(item);
    };

    const handleChange = (e, newValue) => {
        const howMuchToSell = (newValue / 100) * selectedCoin.value
        setSellAmount(howMuchToSell)
        const howMuchCashToBank = howMuchToSell * selectedCoinPrice.current_price
        setCashToBank(howMuchCashToBank)
    };

    return (
        <Box sx={{flexGrow: 1, mt: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>Your Balance :{basicBank} $</Item>
                </Grid>

                {cryptoBank.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                        <Item onClick={(e) => handleOpen(item, e)}>{item.name} - {item.value}
                            <Typography sx={{fontSize: '.5rem'}}>Price:{item.price} , Date:{item.date}</Typography>
                        </Item>
                    </Grid>
                ))}
                {open && (
                    <Modal open={open} onClose={handleClose}>
                        <StyledBox>
                            <Typography variant="h6">
                                Sell: {selectedCoin.name}
                            </Typography>
                            <Typography variant={'body1'}>
                                Total: {(selectedCoin.value)}
                            </Typography>
                            <Typography variant={'body1'}>
                                Current Price: {selectedCoinPrice.current_price}
                            </Typography>
                            <Typography variant={'body1'}>
                                Amount to Sell: {(sellAmount)}
                            </Typography>
                            <Typography variant={'body1'}>
                                Cash: {(cashToBank)}
                            </Typography>
                            <Slider
                                onChange={handleChange}
                                defaultValue={0}
                                step={null}
                                marks={[{value: 0, label: '0%'},
                                    {value: 25, label: '25%'},
                                    {value: 50, label: '50%'},
                                    {value: 75, label: '75%'},
                                    {value: 100, label: '100%'},]}>
                            </Slider>
                            <Stack directions={'row'} spacing={2} mt={2}>
                                <Button onClick={handleClose}> <CloseOutlinedIcon/>
                                </Button>
                                <Button onClick={handleSell}> Sell <CurrencyExchangeOutlinedIcon/> </Button>
                            </Stack>
                        </StyledBox>
                    </Modal>
                )}
            </Grid>

        </Box>
    );
};


const StyledBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    padding: 70,
    border: '2px solid var(--primary-color)',
    color: 'var(--background-color)',
    maskImage: 'linear-gradient(to bottom, #0005 10%, #000 10%)',
    maskSize: '100% 2px',
    textShadow: '0 0 0.5rem',
    boxShadow: 'inset 0 0 2rem',
    background: 'linear-gradient(180deg, #fbe63f 100%, #D9BA05 100%, #b6a417 100%)',
});
export default Wallet;