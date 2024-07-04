import React, {createContext, useState} from 'react';

const LoginContext = createContext()


const LoginProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false)

    //Method to update state isLogged
    const login = () => setIsLogged(true);
    const logout = () => setIsLogged(false)

    return (
        <LoginContext.Provider value={{isLogged, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginProvider,LoginContext};