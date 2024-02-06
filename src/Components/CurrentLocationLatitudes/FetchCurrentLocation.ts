import axios from 'axios'

export const getLatitudeByName = async (name: string) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=f54478f92f7c61c7e57b5d493de49237`
    const response = await axios.get(url)
    return response.data
}