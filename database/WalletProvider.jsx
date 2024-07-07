import React, {createContext, useState, useCallback} from 'react';

const WalletContext = createContext()

const WalletProvider = ({children}) => {
    const [basicBank, setBasicBank] = useState(100000)
    const [cryptoBank, setCryptoBank] = useState([])

    const transactionBasicBank = useCallback((amount) => {
        setBasicBank(prev => prev - amount)
    }, []);

    const transactionCryptoBank = useCallback((newCrypto) => {
        setCryptoBank(prev => (
            [...prev, newCrypto]
        ))
    }, [])


    return (
        <WalletContext.Provider value={{basicBank, cryptoBank, transactionBasicBank, transactionCryptoBank}}>
            {children}
        </WalletContext.Provider>
    )
}
export {WalletContext,WalletProvider}