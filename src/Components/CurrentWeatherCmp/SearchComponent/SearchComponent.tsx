import React, {useContext, useEffect, useState} from 'react';
import {InputContainer, SearchComponentWrapper} from './SearchComponent.style';
import {gettingWeatherData, useContextProvider, useWeatherProvider} from '../../../store';
import {getLatitudeByName} from '../../CurrentLocationLatitudes/FetchCurrentLocation';

export type SearchComponentProps = {
	// types...
}

const SearchComponent: React.FC<SearchComponentProps>  = ({}) => {
    const [searchState, setSearchState] = useState()
    const [inputState, setInputState] = useState('Lima')
    useEffect(() => {
        const datos = getLatitudeByName(inputState)
    }, [])
    const handleChange = (e) => {
        setInputState(e.target.value)
    }
    
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const latitude = await getLatitudeByName(inputState)
        const result = await gettingWeatherData(latitude[0].name, latitude[0].country)
        setSearchState(result)
    }
	return (
		<SearchComponentWrapper>
 			<form onSubmit={handleSubmit}>
             <InputContainer>
                <label htmlFor='search'>Enter your Search</label>
                <input name='search' id='search' onChange={handleChange}/>
                <button type='submit'>Search</button>
            </InputContainer>
            </form>
            {/* {searchState} */}
 		</SearchComponentWrapper>
	);
};

export default SearchComponent;
