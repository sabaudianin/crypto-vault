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

    const fetchData = () => {
        const API = 'https://api.coingecko.com/api/v3/coins/markets';
        const params = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
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
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <DataContext.Provider value={{data, loading, error}}>
            {children}
        </DataContext.Provider>
    )

        ;
};

export {DataProvider, DataContext};

//
// if (loading) return (
//     <div>....Loading...Please Wait...</div>
// );
// if (error) return (
//     <div>Error: {error.message}</div>
// )

