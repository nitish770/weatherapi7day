import React, { createContext, useContext, useReducer } from 'react'
import { WeatherReducer } from './Reducer';

const WetherAPPContext = createContext();

const ContextWeatheApp = ({children}) => {
    const[state, dispatch]=useReducer(WeatherReducer,{
        city:{
          "city": "Delhi", 
    "lat": "28.6100", 
    "lng": "77.2300", 
    "country": "India", 
    "iso2": "IN", 
    "admin_name": "Delhi", 
    "capital": "admin", 
    "population": "32226000", 
    "population_proper": "16753235"
        },
        current:'',
        daily:''
    })
  return (
    <>
    <WetherAPPContext.Provider value={{state, dispatch}}>
        {children}
    </WetherAPPContext.Provider>
    </>
  )
}

export default ContextWeatheApp;

export const UseWeatherAPPContext=()=>{
    return useContext(WetherAPPContext)
}