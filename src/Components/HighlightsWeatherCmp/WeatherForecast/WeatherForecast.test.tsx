import React from 'react';
import { render } from '@testing-library/react';
import WeatherForecast from './WeatherForecast';

describe('WeatherForecast', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<WeatherForecast />);

        expect(baseElement).toBeTruthy();
    });
});