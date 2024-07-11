import React, {useState, useEffect, createContext, useCallback} from 'react';
import axios from 'axios';

//Context Initialization
const DataContext = createContext();

//Create Wrapper Provider set State to all components
const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1)

    const fetchData = useCallback((page) => {
        console.log('fetchData')
        const API = 'https://api.coingecko.com/api/v3/coins/markets';
        const params = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 40,
            page: page,
            sparkline: true,
            price_change_percentage: '24h'
        };
        console.log('Update Danych w funkcji api data')
        setLoading(true);

        axios.get(API, {params})
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [])


    useEffect(() => {
        fetchData(page);
        console.log('useEffect DataProvider')
        const intervalId = setInterval(() => {
            fetchData(page);
        }, 600000);

        return () => clearInterval(intervalId);
    }, [fetchData, page]);


    const updatePage = useCallback((newPage) => {
        setPage(newPage);
        setLoading(true);
    }, [])

    return (
        <DataContext.Provider value={{data, loading, error, updatePage, page}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, DataContext};


