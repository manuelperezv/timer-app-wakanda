import React from 'react';
import { render } from '@testing-library/react';
import SearchComponent from './SearchComponent';

describe('SearchComponent', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SearchComponent />);

        expect(baseElement).toBeTruthy();
    });
});