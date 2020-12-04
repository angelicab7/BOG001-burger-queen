import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

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

  it('should render by default a primary button when no color prop is provided', () => {
    render(<Button>Click me!</Button>);

    const button = screen.getByText('Click me!');

    expect(button.className.includes('btn primary')).toBeTruthy();
  });

  it('should render the button with an specific color provided by color prop', () => {
    const { container } = render(<Button color="secondary">Click me!</Button>);

    const button = container.querySelector('button');

    expect(button.className.includes('secondary')).toBeTruthy();
  });

  it('should add a custom className when is provided', () => {
    render(<Button className="margin-t-one">Click me!</Button>);

    const button = screen.getByText('Click me!');

    expect(button.className.includes('margin-t-one')).toBeTruthy();
  });
});
