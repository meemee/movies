import React from 'react';
import { render } from '@testing-library/react';
import Movies from './';
import { Provider } from 'react-redux';
import store from '../../store';


describe('SearchBox', () => {
    it('renders', async () => {
        const { container } = render(
            <Provider store={store}><Movies /></Provider>
        );
    
        expect(container).toMatchSnapshot();
      });

});