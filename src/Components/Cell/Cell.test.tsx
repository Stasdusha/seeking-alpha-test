import React from 'react';
import { render } from '@testing-library/react';
import Cell from './Cell';

describe('Cell component tests', () => {

  test('Cell black test', () => {
    const { container } = render(<Cell cell={0} />);
    expect(container.firstChild).not.toHaveClass('cell-alive')
  });

  test('Cell white test', () => {
    const { container } = render(<Cell cell={1} />);
    expect(container.firstChild).toHaveClass('cell-alive')
  });
})