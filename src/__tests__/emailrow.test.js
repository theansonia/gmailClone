import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { StateContext } from '../contexts/stateContext';
import EmailRow from '../components/emailitem/EmailRow';
import { MemoryRouter, useHistory } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Testing emailrow', () => {
  const wrapper = render(
    <StateContext.Provider value={'Inbox'}>
      <MemoryRouter>
        <EmailRow />
      </MemoryRouter>
    </StateContext.Provider>
  );
  it('Renders debugs the Header component', () => {
    wrapper.debug();
  });
  xit('Test that settings button activates settings modal after click', (done) => {
    render(
      <StateContext.Provider value={'Inbox'}>
        <MemoryRouter>
          <EmailRow />
        </MemoryRouter>
      </StateContext.Provider>
    );

    const stars = screen.getByRole('button');

    userEvent.click(stars);

    const yellowstar = screen.getAllByTestId('yellowstar');
    expect(yellowstar).toBeTruthy();
    done();
  });
});
