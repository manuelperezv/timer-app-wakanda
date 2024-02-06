import React from "react";
import {DasboardWrapper} from "./Dashboard.style";
import CurrentWeatherCmp from "../Components/CurrentWeatherCmp/CurrentWeatherCmp";
import HighlightsWeatherCmp from "../Components/HighlightsWeatherCmp/HighlightsWeatherCmp";

const Dashboard = () => {
  return (
    <DasboardWrapper>
        <CurrentWeatherCmp />
        <HighlightsWeatherCmp />
    </DasboardWrapper>
  );
};

export default Dashboard;
