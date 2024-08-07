import React, {useContext} from 'react';
import {DataContext} from '../contextApi/DataProvider.jsx';

import {styled} from '@mui/system';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationSize = () => {
    const {page, updatePage} = useContext(DataContext);

    const handleChange = (e, value) => {
        updatePage(value)
    };

    return (
        <StyledStack spacing={2}>
            <StyledPagination
                count={10}
                shape="rounded"
                size="xl"
                onChange={handleChange}
                page={page}
            />
        </StyledStack>
    );
};

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
            backgroundColor: 'var(--tertiary-color)',
        },
    },
})

const StyledPagination = styled(Pagination)({
    fontFamily: 'inherit',
    display: 'flex',
    justifyContent: 'center'
})
export default PaginationSize;