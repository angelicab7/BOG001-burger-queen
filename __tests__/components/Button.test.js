import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// Components
import Button from '../../src/components/Button';

describe('<Button /> Component tests', () => {
  it('should render the button correctly', () => {
    render(<Button>Click me!</Button>);

    expect(screen.getByText('Click me!')).toBeInTheDocument();
  });

  it('should fire an event when is clicked', () => {
    const mockCall = jest.fn();
    render(<Button onClick={mockCall}>Click me!</Button>);

    const button = screen.getByText('Click me!');
    fireEvent.click(button);

    expect(mockCall.mock.calls.length).toBe(1);
  });

  it('should render the spinner when is loading', () => {
    render(<Button isLoading>Click me!</Button>);

    expect(screen.queryByText('Click me!')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
