import React ,{useContext} from 'react';
import { DataContext } from '../fetch/DataFetch';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationSize = () => {
    const { page, updatePage } = useContext(DataContext);

    const handleChange = (e, value) => {
        console.log(e,value)
        updatePage(value)};

    return (
        <Stack spacing={2} >
            <Pagination
                count={10}
                shape="rounded"
                size="xl"
                onChange={handleChange}
                page={page}
                sx={{

                '& .MuiPaginationItem-root': {
                    color: 'inherit',
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(196,143,8,1)',

                    },
                },
            }}  />
        </Stack>
    );
}
export default PaginationSize;