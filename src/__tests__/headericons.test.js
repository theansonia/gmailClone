import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { StateContext } from '../contexts/stateContext';
import HeaderIcons from '../components/layout/HeaderIcons';

xdescribe('Testing Header', () => {
  const wrapper = render(
    <StateContext.Provider value={(jest.fn(), jest.fn(), true)}>
      <HeaderIcons />
    </StateContext.Provider>
  );
  it('Renders debugs the Header component', () => {
    wrapper.debug();
  });
  it('Test that settings button activates settings modal after click', (done) => {
    const wrapper = render(
      <StateContext.Provider value={true}>
        <HeaderIcons />
      </StateContext.Provider>
    );
    const settings = wrapper.getByTestId('settings');

    userEvent.click(settings);
  });
});
