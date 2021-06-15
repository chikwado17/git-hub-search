import React, { createContext, useReducer } from 'react';
import alertReducer from './alertReducer';


export const AlertContext = createContext();

const AlertContextProvider = ({children}) => {

    const initialState = {
        alert: false
    }

    const [ state, dispatch ] = useReducer(alertReducer,initialState);

       
    //a function to display an alert message when a user whats to submit empty input
    const handleEmptyInput = () => {
        dispatch({
            type: 'ADD_ALERT'
        });

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT'
            })
        },3000);
    }

    return (
        <AlertContext.Provider value={{alert: state.alert, handleEmptyInput}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider;