import React, {createContext, useState, useCallback} from 'react';

const LoginContext = createContext()



const LoginProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(true)

    //Method to update state isLogged
    const logIn = useCallback(() => {
        setIsLogged(true);
    }, []);

    const logOut = useCallback(() => {
        setIsLogged(false)
    }, []);

    return (
        <LoginContext.Provider value={{isLogged, logIn,logOut}}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginProvider, LoginContext};