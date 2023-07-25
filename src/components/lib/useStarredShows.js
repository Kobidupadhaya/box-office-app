/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer, useEffect } from "react";
const usePersistedReducer =(reducer, initialState, localStoragekey)=>{
    const [state,dispatch]=useReducer (reducer, initialState, (initial)=>{
  const PersistedValue = localStorage.getItem(localStoragekey)
  
  return PersistedValue ? JSON.parse(PersistedValue) : initial;
    });
  
  useEffect ( ()=>{
    localStorage.setItem(localStoragekey, JSON.stringify(state))
  },[state,localStoragekey])
  
  return[state,dispatch];
  };
  
  const starredShowsReducer =(currentStarred, action)=>{
  switch (action.type){
      case 'STAR': return currentStarred.concat(action.showId)
      case 'UNSTAR': return currentStarred.filter((showId)=>showId !== action.showId)
      default:
        return currentStarred;
    }
  };
     export const useStarredShows =()=>{
    
        
        return usePersistedReducer (
            starredShowsReducer,
             [],
              'starredShows'
              );
      
   };
  
  