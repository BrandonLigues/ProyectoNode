// src/SomeContext.js
import React, { createContext, useState } from 'react';

export const SomeContext = createContext();

export const SomeContextProvider = ({ children }) => {
    const [state, setState] = useState(null);

    return (
        <SomeContext.Provider value={[state, setState]}>
            {children}
        </SomeContext.Provider>
    );
};