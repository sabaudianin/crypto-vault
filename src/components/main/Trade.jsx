import React, {useContext} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {DataContext} from '../../../database/DataFetch.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const Trade = () => {
    const {data, loading, error} = useContext(DataContext);
    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    const columns = [
        {field: 'id', headerName: 'ID', flex: 1, minWidth: 30},
        {field: 'name', headerName: 'Name', flex: 4, minWidth: 150},
        {field: 'price', headerName: 'Price', flex: 3, minWidth: 150},
        {
            field: 'buy',
            headerName: 'Buy',
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <IconButton color="inherit" >
                    <ShoppingCartIcon />
                </IconButton>
            ),
        },
    ];

    const rows = data.map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.current_price,

    }));

    return (
        <div style={{width: '100%'}}>
            <div style={{height: '100%', width: '100%', color: 'white',backgroundColor: 'black'}}>
                <DataGrid rows={rows} columns={columns} sx={{
                    color: 'var(--primary-color)', backgroundColor: 'black',
                    '& .MuiDataGrid-root': {
                        background: 'pink',
                        color:'white'
                    },

                    '&.MuiDataGrid-root .MuiDataGrid-container--top [role=row]': {
                        backgroundColor: 'cornflowerblue'},

                    '& .MuiDataGrid-footerContainer': {
                        color: 'inherit',
                    },


                    '& .MuiTablePagination-root': {
                        color: 'var(--primary-color)',
                    },
                    '& .MuiTablePagination-actions': {
                        color:'white',
                    }
                }}/>
            </div>
        </div>
    );
};


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
//


export default Trade;