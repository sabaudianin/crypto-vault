import React, {createContext, useState, useCallback} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const UserWalletContext = createContext()

const UserWalletProvider = ({children}) => {
    const [basicBank, setBasicBank] = useState(0);
    const [cryptoBank, setCryptoBank] = useState([]);
    const [userId, setUserId] = useState(null);


    const setUserWallet = (user) => {
        setBasicBank(user.basicBank);
        setCryptoBank(user.cryptoBank);
        setUserId(user.id)
    }

    //Aktualizacja i zapis w JsonServer

    const transactionBasicBank = useCallback((amount) => {
        setBasicBank(prev => {
            const newBasicBank = prev + amount;
            axios.patch(`http://localhost:3000/users/${userId}`, {basicBank: newBasicBank})
                .catch(error => console.error('Błąd podczas zapisywania do basicBanku', error));
            return newBasicBank;
        });
    }, [userId]);


    const transactionCryptoBank = useCallback((newTransaction) => {
        setCryptoBank(prev => {
            let newCryptoBank;
            const cryptoBankIndex = prev.findIndex(crypto => crypto.date === newTransaction.date);

            if (cryptoBankIndex !== -1) {
                newCryptoBank = [...prev];
                newCryptoBank[cryptoBankIndex].value += newTransaction.value;

                if (newCryptoBank[cryptoBankIndex].value <= 0) {
                    newCryptoBank.splice(cryptoBankIndex, 1);
                }
            } else {
                newCryptoBank = [...prev, newTransaction];
            }

            axios.patch(`http://localhost:3000/users/${userId}`, {cryptoBank: newCryptoBank})
                .catch(error => console.error('Błąd podczas zapisywania cryptoBanku:', error));

            return newCryptoBank;
        });
    }, [userId]);


    return (
        <UserWalletContext.Provider
            value={{basicBank, cryptoBank, transactionBasicBank, transactionCryptoBank, setUserWallet}}>
            {children}
        </UserWalletContext.Provider>)
}

UserWalletProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export {UserWalletContext, UserWalletProvider}