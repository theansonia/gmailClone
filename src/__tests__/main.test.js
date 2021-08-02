import React from 'react';
import { render, screen } from '@testing-library/react';
import { StateContext } from '../contexts/stateContext';
import Main from '../components/layout/Main';
import { MemoryRouter } from 'react-router-dom';

xtest('Display the App component', () => {
  const folder = 'Inbox';
  const openSettings = null;
  render(
    <StateContext.Provider value={'Inbox'}>
      <MemoryRouter>
        <Main folder={folder} openSettings={openSettings} />
      </MemoryRouter>
    </StateContext.Provider>
  );
  screen.debug();
});
