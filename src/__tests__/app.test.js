import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import { StateContext } from '../contexts/stateContext';

describe('Testing App Component', () => {
  const wrapper = render(
    <StateContext.Provider value={true}>
      <App open={true} />
    </StateContext.Provider>
  );
  xtest('Display the App component', () => {
    wrapper.debug();
  });
  test('Check that all the children were rendered', () => {
    const header = wrapper.getByTestId('header');
    const main = wrapper.getByTestId('main');

    expect(main).not.toBeNull();
    expect(header).not.toBeNull();
  });
});
