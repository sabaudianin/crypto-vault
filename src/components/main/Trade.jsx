import React, { useContext, useMemo, memo, useState, useEffect } from 'react';

import { DataContext } from '../../../database/DataFetch.jsx';
import {UserWalletContext} from "../../../database/UserWalletProvider.jsx";
import PaginationSize from './Pagination.jsx';
import Market from './Market.jsx';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const Trade = memo(() => {
    const { data, loading, error } = useContext(DataContext);

    const [open, setOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState(null);


console.log(data, 'Trade')
    useEffect(() => {
        console.log('Open state', open);
    }, [open]);

    const handleChooseCoin = (e, coin) => {
        setSelectedCoin(coin);
        setOpen(true);
        console.log('function HandleBuy', open);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCoin(null);
        console.log('function HandleClose', open)
    };



    return useMemo(() => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
           <>
                <StyledTableContainer component={Paper}>
                    <Table sx={{ minWidth: 450 }} aria-label="simple table">
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
                                            <ShoppingCartIcon />
                                        </StyledIconButton>
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <PaginationSize />
                </StyledTableContainer>
                {open && (
                    <Market
                        coin={selectedCoin}

                        onClose={handleClose}

                    />
                )}
            </>
        );
    }, [data, loading, error, open, selectedCoin]);
});
Trade.displayName = 'Trade';


//Style

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: 'inherit',
    color: 'var(--primary-color)',
    fontFamily: 'inherit',
});

const StyledTableCell = styled(TableCell)({
    color: 'var(--primary-color)',
    fontFamily: 'inherit',
    padding: 0,
});

const StyledIconButton = styled(IconButton)({
    color: 'var(--primary-color)',
    '&:hover': {
        color: 'var(--secondary-color)',
    },
    '&:active': {
        color: 'var(--tertiary-color)',
    }
});

export default Trade;