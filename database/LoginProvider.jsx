import React, {createContext, useState, useCallback} from 'react';

const LoginContext = createContext()



const LoginProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(true)

    //Method to update state isLogged
    const login = useCallback(() => {
        setIsLogged(true);
    }, []);

    const logout = useCallback(() => {
        setIsLogged(false)
    }, []);

    return (
        <LoginContext.Provider value={{isLogged, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginProvider, LoginContext};