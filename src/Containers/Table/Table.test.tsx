
import React from "react";
import { render, act } from "@testing-library/react";
import Table from "./Table"

const initTable = [
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0],
]

const resultTable = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,1,1,1,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
]

describe('Table component tests', () => {

  jest.useFakeTimers()

  test('Table change state after tick', () => {
    const crateTableMock = jest.fn(() => initTable)
    const nextTickMock = jest.fn(() => resultTable)
    render(<Table createTable={crateTableMock}  nextTick={nextTickMock}/>);

    expect(crateTableMock).toBeCalled();
    expect(nextTickMock).not.toBeCalled();

    act(() => {
      jest.advanceTimersByTime(2000);
    })

    expect(nextTickMock).toBeCalled();
  });

  test('Table change state after tick', () => {
    const crateTableMock = jest.fn(() => initTable)
    const nextTickMock = jest.fn(() => resultTable)
    const { container } = render(<Table createTable={crateTableMock}  nextTick={nextTickMock}/>);

    container
 
  });


})