import {useQuery} from "@tanstack/react-query";
import React, {useContext} from "react";
import {fetchWeatherCity, fetchWeatherHook} from "../WeatherData/FetchWeather";

const ContextProvider = React.createContext({});
const WeatherProviderWrapper = React.createContext({});

export const useContextProvider = () => {
    return useContext(ContextProvider)
}

export const useWeatherProvider = () => {
    return useContext(WeatherProviderWrapper)
}
export const gettingWeatherData = async (city = 'Lima', country= 'pe') => {
    const data = await fetchWeatherCity(city, country)
    return data
}
const WeatherProvider = ({children}: any) => {
    const store = useQuery({
        queryKey: ['cities'],
        queryFn: async ({city,country}:any) => gettingWeatherData(city, country),
        staleTime: 500
    })
    const {data, isLoading, isError} = useQuery({
        queryKey: ['weather'],
        queryFn: fetchWeatherHook as any,
        staleTime: 300
    })
    return (
        <ContextProvider.Provider value={{data, isLoading, isError}}>
            <WeatherProviderWrapper.Provider value={store}>
            {children}
            </WeatherProviderWrapper.Provider>
        </ContextProvider.Provider>
    )
}

export default WeatherProvider