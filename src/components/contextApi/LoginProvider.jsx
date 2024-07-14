import React, {createContext, useState, useCallback, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {UserWalletContext} from "./UserWalletProvider.jsx";

import axios from 'axios';
import PropTypes from 'prop-types';


const LoginContext = createContext()

const LoginProvider = ({children}) => {
    const {setUserWallet} = useContext(UserWalletContext)
    const [isLogged, setIsLogged] = useState(false);
    // const [isLogged, setIsLogged] = useState(() => {
    //     const saved = localStorage.getItem('isLogged');
    //     return saved === 'true';
    // });
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState([]);
    const navigate = useNavigate();

    //Method to update state isLogged,set id
    const logIn = useCallback((email, password) => {
        setErrors([]);
        setSuccess([]);
        axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
            .then((response) => {
                if (response.data.length > 0) {
                    const user = response.data[0];
                    setUserWallet(user);
                    setIsLogged(true);
                    // localStorage.setItem('isLogged', 'true')
                    setSuccess(['ZALOGOWANO']);
                } else {
                    setErrors(['Nieprawidłowe dane logowania']);
                }
            })
            .catch(error => {
                console.log('Błąd podczas logowania', error);
                setErrors(['Błąd podczas próby zalogowania'])
            });
    }, [setUserWallet]);

    const logOut = useCallback(() => {
        setIsLogged(false);
        setSuccess([]);
        // localStorage.removeItem('isLogged');
        setUserWallet({basicBank: 0, cryptoBank: []})
        navigate('/');
    }, [setUserWallet]);

    return (
        <LoginContext.Provider value={{isLogged, logIn, logOut, errors, success, setErrors}}>
            {children}
        </LoginContext.Provider>
    )
}


LoginProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {LoginProvider, LoginContext};