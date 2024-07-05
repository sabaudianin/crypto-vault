import React,{useContext} from 'react';

import {DataContext} from '../../../database/DataFetch.jsx';

import PaginationSize from './Pagination.jsx';

import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



const BasicGrid = () => {
    const {data, loading, error} = useContext(DataContext);

    if (loading) return (
        <div>....Loading...Please Wait...</div>);
    if (error) return (
        <div>Error: {error.message}</div>)

    return (
        <StyledBox>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <p>Total Balance:</p>
                        <p>20 000 $</p>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>BUY</p>
                        <AddCircleOutlineIcon/>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>SELL</p>
                        <RemoveCircleOutlineIcon/>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    <Item spacing={3}>Current Price:</Item>
                </Grid>
                {/*{loading*/}
                {/*    ? (<Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign:'center'}}>*/}
                {/*        ....Loading...Please Wait...*/}
                {/*    </Grid>)*/}
                {/*    : (*/}
                {data.map(currency => (
                            <Grid item key={currency.id} xs={12} sm={6}>
                                <Item>{currency.name}-${currency.current_price.toFixed(2)}</Item>
                            </Grid>
                        ))}
                    {/*)}*/}


                <StyledGrid>
                    <div>
                        <PaginationSize/>
                    </div>
                </StyledGrid>
            </Grid>
        </StyledBox>
    )
};
const StyledBox = styled(Box)({
    // paddingTop: '40px',
    flexGrow: 1,
    marginTop:20,
})

const StyledGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',

})


const Item = styled(Paper)(({theme}) => ({
    background: 'inherit',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'var(--primary-color)',
    maskImage: 'linear-gradient(to bottom, #0005 50%, #000 50%)',
    maskSize: '100% 2px',
    textShadow: '0 0 0.5rem',
    border: '1px solid var(--primary-color)',
    borderRadius: '4px',
}));

export default BasicGrid;