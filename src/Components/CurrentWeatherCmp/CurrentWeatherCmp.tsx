import React from "react";
import {CurrentWeatherWrapper} from "./CurrentWeatherCmp.style";
import {SearchComponent} from "./SearchComponent";
import {LocationButtonCmp} from "./LocationButtonCmp";
import { useQuery } from '@tanstack/react-query'

const CurrentWeatherCmp = () => {
  return (
    <CurrentWeatherWrapper>
        <SearchComponent />
        <LocationButtonCmp />
        CurrentWeatherCmp
        </CurrentWeatherWrapper>
  )
};

export default CurrentWeatherCmp;
