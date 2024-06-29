import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {DataContext} from "../fetch/DataFetch.jsx";
import {useContext} from "react";

const StyledBox = styled(Box)({
    paddingTop: '40px',
    flexGrow: 1,
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
    }))
;
const BasicGrid = () => {

    const {data, loading, error} = useContext(DataContext);



if (loading) return (
    <div>....Loading...Please Wait...</div>
);
if (error) return (
    <div>Error: {error.message}</div>
)
    return (

        <StyledBox>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item>
                        <p>Total Balance:</p>
                        <p>20 000 $</p>
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item>
                        <p>BUY</p>
                        <AddCircleOutlineIcon/>
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item>
                        <p>SELL</p>
                        <RemoveCircleOutlineIcon/>
                    </Item>
                </Grid>

                <Grid xs={12}>
                    <Item spacing={3}>Current Price:</Item>
                    <Stack spacing={2}>
                        {data.map(currency=>(
                            <Item key={currency.id}>{currency.name}-${currency.current_price.toFixed(2)}</Item>
                        ))}
                    </Stack>

                </Grid>

            </Grid>
        </StyledBox>);
}

export default BasicGrid;