import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../store';


describe('Home', () => {
    it('renders', async () => {
        const { container } = render(
            <Provider store={store}><Home /></Provider>
        );

        expect(container).toMatchSnapshot();
      });
});