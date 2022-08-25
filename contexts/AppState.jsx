import React, { createContext, useState } from "react";

const initialState = {
    isAuthenticated: false,
};

export const AppStateContext = createContext();

export const AppStateProvider = props => {
    const [appState, setAppState] = useState(initialState);

    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            {props.children}
        </AppStateContext.Provider>
    );
};