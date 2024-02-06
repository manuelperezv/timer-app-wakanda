import React from 'react';
import { render } from '@testing-library/react';
import TodaysHighlights from './TodaysHighlights';

describe('TodaysHighlights', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TodaysHighlights />);

        expect(baseElement).toBeTruthy();
    });
});