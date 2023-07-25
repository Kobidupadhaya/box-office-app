/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {  useEffect, useState } from "react";

const usePersistedState= (initialState)=>{
const [state, setState]= useState(()=> {
    const PersistedValue = sessionStorage.getItem(sessionStoragekey)
  
  return PersistedValue ? JSON.parse(PersistedValue) : initialState;
});
useEffect ( ()=>{
    sessionStorage.setItem(sessionStoragekey, JSON.stringify(state))
},[state, sessionStoragekey]);

 return [state,setState];
}

export const useSearchStr =()=> {
  return usePersistedState('','seaarchString')
  
};