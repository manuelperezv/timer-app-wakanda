import React from 'react';
import {WeatherForecastWrapper} from './WeatherForecast.style';
export type WeatherForecastProps = {
	// types...
}

const WeatherForecast: React.FC<WeatherForecastProps>  = ({}) => {
	return (
		<WeatherForecastWrapper>
 			WeatherForecast works!
 		</WeatherForecastWrapper>
	);
};

export default WeatherForecast;
