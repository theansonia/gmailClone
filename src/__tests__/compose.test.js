import React from 'react';
import Compose from '../components/buttons/Compose.jsx';
import { render } from '@testing-library/react';

describe('useFetchFolders', () => {
  const wrapper = render(<Compose />);
  xtest('Display the Compose button component', () => {
    // Pass to Thought component as thought prop
    wrapper.debug();
  });
});
