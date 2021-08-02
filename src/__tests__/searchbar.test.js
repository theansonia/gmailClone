import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/layout/SearchBar';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Testing SearchBar', () => {
  xit('Renders debugs the SearchBar component', () => {
    render(<SearchBar />);
    screen.debug();
  });
  it('Test the searchbox input functionality', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Anson Avellar');
    expect(input).toHaveValue('Anson Avellar');
  });
  it('Test that pressing the clear button, clears the searchbox', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'something');
    const element = screen.getByTestId('clearBtn');
    expect(screen.getByRole('textbox')).toHaveAttribute('value', 'something');
    userEvent.click(element);
    expect(screen.getByRole('textbox')).toHaveAttribute('value', '');
  });
  it('Test that clear button disappears after click', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'something');
    const element = screen.getByTestId('clearBtn');
    userEvent.click(element);
    expect(element).not.toBeInTheDocument();
  });
});
