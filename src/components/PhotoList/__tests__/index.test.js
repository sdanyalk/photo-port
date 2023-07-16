import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('PhotList component', () => {
    it('renders', () => {
        render(<PhotoList />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<PhotoList />);

        expect(asFragment()).toMatchSnapshot();
    });
});
