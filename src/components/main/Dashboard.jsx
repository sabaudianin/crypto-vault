import React, {useContext} from 'react';

import {UserWalletContext} from "../contextApi/UserWalletProvider.jsx";
import {DataContext} from '../contextApi/DataProvider.jsx';
import PaginationSize from './Pagination.jsx';
import GridCentered from "./GridCentered.jsx";
import BasicPaperItem from "./BasicPaperItem.jsx";
import FetchStatus from "./FetchStatus.jsx";

import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const BasicGrid = () => {
    const {data, loading, error} = useContext(DataContext);
    const {basicBank} = useContext(UserWalletContext);

    return (
        <StyledBox>
            <FetchStatus loading={loading} error={error}/>
            {!loading && !error && (
                <Grid container spacing={2}>
                    <GridCentered>
                        <BasicPaperItem>
                            <p>Total Balance:</p>
                            <p>{basicBank} $</p>
                        </BasicPaperItem>
                    </GridCentered>

                    <Grid item xs={12}>
                        <BasicPaperItem spacing={3}>Current Price:</BasicPaperItem>
                    </Grid>

                    {data.map(currency => (<Grid item key={currency.id} xs={12} sm={6} md={4} lg={3}>
                        <BasicPaperItem>{currency.name}-${currency.current_price.toFixed(2)}</BasicPaperItem>
                    </Grid>))}

                    <GridCentered>
                        <div>
                            <PaginationSize/>
                        </div>
                    </GridCentered>
                </Grid>
            )}
        </StyledBox>)
}

const StyledBox = styled(Box)({
    // paddingTop: '40px',
    flexGrow: 1, marginTop: 20,
})


export {BasicGrid};