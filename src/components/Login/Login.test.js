import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('<Login />', () => {
  test('it should mount', () => {
    const element = render(<Login />);

    expect(element).toMatchSnapshot();

  });
});