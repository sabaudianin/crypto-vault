import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

//Context Initialization
const DataContext = createContext();

//Create Wrapper Provider
const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1)

    const fetchData = (page) => {
        const API = 'https://api.coingecko.com/api/v3/coins/markets';
        const params = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: page,
            sparkline: true,
            price_change_percentage: '24h'
        };
        console.log('Update Danych w funkcji fetch data')

        axios.get(API, {params})
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };


    useEffect(() => {
        fetchData(page);

        const intervalId = setInterval(() => {
            fetchData(page);
        }, 60000);

        return () => clearInterval(intervalId);
    }, [page]);


    const updatePage = (newPage) => {
        setPage(newPage);
        setLoading(true);
    };

    return (
        <DataContext.Provider value={{data, loading, error, updatePage, page}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, DataContext};


