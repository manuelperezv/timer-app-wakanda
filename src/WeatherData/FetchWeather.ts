import axios from 'axios'



export const fetchWeatherHook = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Lima,pe&APPID=f54478f92f7c61c7e57b5d493de49237`);
    return response.data;
}

export const fetchWeatherCity = async (lat: string, long: string) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lat},${long}&APPID=f54478f92f7c61c7e57b5d493de49237`);
    return response.data;
}
