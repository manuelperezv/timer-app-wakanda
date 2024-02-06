import React from 'react';
import { render } from '@testing-library/react';
import LocationButtonCmp from './LocationButtonCmp';

describe('LocationButtonCmp', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<LocationButtonCmp />);

        expect(baseElement).toBeTruthy();
    });
});