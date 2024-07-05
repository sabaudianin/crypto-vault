import React, {useContext} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import {DataContext} from '../../../database/DataFetch.jsx';
import PaginationSize from './Pagination.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from '@mui/material/styles';

const Trade = () => {
    const {data, loading, error} = useContext(DataContext);
    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const handleBuy = (price) => {
        console.log(`Kup ${price}`);
    };
    return (
        <StyledTableContainer component={Paper}>
            <Table sx={{minWidth: 350}} aria-label="simple table">
                <TableHead>
                    <TableRow size='xs'>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>Buy</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={row.id}>
                            <StyledTableCell>{index + 1}</StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.current_price}</StyledTableCell>
                            <StyledTableCell>
                                <StyledIconButton onClick={() => handleBuy(row.current_price)}>
                                    <ShoppingCartIcon/>
                                </StyledIconButton>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <PaginationSize/>
        </StyledTableContainer>
    )
};


const StyledTableContainer = styled(TableContainer)({
    backgroundColor: 'inherit',
    color: 'var(--primary-color)',
    fontFamily: 'inherit',

});

const StyledTableCell = styled(TableCell)({
    color: 'var(--primary-color)',
    fontFamily: 'inherit',
    padding: 0,
    textAlign: 'center',
});

const StyledIconButton = styled(IconButton)( {
    color: 'var(--primary-color)',
    '&:hover': {
        color: 'var(--secondary-color)',
    },
    '&:active':{
        color:'var(--tertiary-color)',
    }
})
export default Trade;