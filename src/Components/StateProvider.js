import React, { createContext, useContext,useReducer } from 'react';

export const stateContext = createContext();


//higher order component
export const StateProvider =({reducer, initialState, children})=>
(
<stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);