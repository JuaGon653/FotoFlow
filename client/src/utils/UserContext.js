import React, { useReducer, useContext } from 'react';
import { initialState, reducer } from './reducers';

export const UserContext = React.createContext();

// export const accessUserContext = () => useContext(UserContext);

export default function UserProvider({ children }) {
    const store = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={ store }>
            {children}
        </UserContext.Provider>
    );
};