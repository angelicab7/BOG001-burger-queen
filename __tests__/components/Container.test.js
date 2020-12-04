import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '../../src/components/Container';

describe('<Container /> Component tests', () => {
  it('should render the component correctly', () => {
    render(<Container className="padding-all-one">document style</Container>);
    const container = screen.getByText('document style');
    expect(container).toBeInTheDocument();
    expect(container.className.includes('container padding-all-one'));
  });
});
