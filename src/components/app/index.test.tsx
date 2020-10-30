import React from 'react';
import { render } from '@testing-library/react';
import App from '.';
import { Provider } from 'react-redux';
import store from '../../store';

describe('App', () => {
  it('renders', async () => {
    const { container } = render(
      <Provider store={store}><App /></Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});