import React, {useContext, useState, useEffect} from 'react';

import {DataContext} from '../contextApi/DataProvider.jsx';
import PaginationSize from './Pagination.jsx';
import Market from './Market.jsx';
import FetchStatus from "./FetchStatus.jsx";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from '@mui/material/styles';

const Trade = () => {
    const {data, loading, error} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState(null);


    const handleChooseCoin = (e, coin) => {
        setSelectedCoin(coin);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCoin(null);
        console.log('function HandleClose', open)
    };


    return (
        <>
            <StyledTableContainer component={Paper}>
                <FetchStatus loading={loading} error={error}/>
                {!loading && !error && (
                    <Table sx={{minWidth: 450}} aria-label="simple table">
                        <TableHead>
                            <TableRow size='xs'>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Price</StyledTableCell>
                                <StyledTableCell>ATH</StyledTableCell>
                                <StyledTableCell>+/-24h</StyledTableCell>
                                <StyledTableCell>Buy</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((coin, index) => (
                                <TableRow key={coin.id}>
                                    <StyledTableCell>{index + 1}</StyledTableCell>
                                    <StyledTableCell>{coin.name}</StyledTableCell>
                                    <StyledTableCell>{coin.current_price}</StyledTableCell>
                                    <StyledTableCell>{coin.ath}</StyledTableCell>
                                    <StyledTableCell>{coin.price_change_percentage_24h}</StyledTableCell>
                                    <StyledTableCell>
                                        <StyledIconButton onClick={(e) => handleChooseCoin(e, coin)}>
                                            <ShoppingCartIcon/>
                                        </StyledIconButton>
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
                <PaginationSize/>
            </StyledTableContainer>
            {open && (
                <Market
                    coin={selectedCoin}
                    onClose={handleClose}
                />
            )}
        </>
    );

};
Trade.displayName = 'Trade';


//Style

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: 'inherit',
    color:
        'var(--primary-color)',
    fontFamily:
        'inherit',
});

const StyledTableCell = styled(TableCell)({
    color: 'var(--primary-color)',
    fontFamily:
        'inherit',
    padding:
        0,
});

const StyledIconButton = styled(IconButton)({
    color: 'var(--primary-color)',
    '&:hover':
        {
            color: 'var(--secondary-color)',
        }
    ,
    '&:active':
        {
            color: 'var(--tertiary-color)',
        }
});

export default Trade;