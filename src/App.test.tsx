import React from 'react';
import { render } from '@testing-library/react';
import Cell from './Components/Cell';
import { isInFrame, createTable,  } from './helpers'


test('Cell black test', () => {
  const { container } = render(<Cell cell={0} />);
  expect(container.firstChild).not.toHaveClass('cell-alive')
});

test('Cell white test', () => {
  const { container } = render(<Cell cell={1} />);
  expect(container.firstChild).toHaveClass('cell-alive')
});

test('Cell in Frame', () => {
  const testCell = [2, 30]
  const testSize = 50
  expect(isInFrame(testCell, testSize)).toBeTruthy()
});

test('Cell not in Frame', () => {
  const testCell = [2, 51]
  const testSize = 50
  expect(isInFrame(testCell, testSize)).toBeFalsy()
});

test('create table length', () => {
  const testSize = 50
  expect(createTable(testSize).length).toBe(testSize)
  expect(createTable(testSize)[0].length).toBe(testSize)
});

test('create table length', () => {
  const testSize = 50
  expect(createTable(testSize).length).toBe(testSize)
  expect(createTable(testSize)[0].length).toBe(testSize)
});