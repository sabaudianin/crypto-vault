import React, {useContext, memo} from 'react';
import {DataContext} from '../../../database/DataFetch.jsx';

import {styled} from '@mui/system';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationSize = memo(() => {
    const {page, updatePage} = useContext(DataContext);
    console.log('Pagination mount', page)

    const handleChange = (e, value) => {
        console.log(e, value)
        updatePage(value)
    };

    return (

        <StyledStack spacing={2}>
            <Pagination
                count={10}
                shape="rounded"
                size="xl"
                onChange={handleChange}
                page={page}
                sx={{
                    fontFamily: 'inherit',
                    display: 'flex',
                    justifyContent: 'center'

                }}/>
        </StyledStack>

    );
});

const StyledStack = styled(Stack)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontWeight: 400,
    marginTop: '20px',

    '& .MuiPaginationItem-root': {
        color: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 400,

        '&.Mui-selected': {
            backgroundColor: 'rgba(196,143,8,1)',

        },
    },
})
export default PaginationSize;