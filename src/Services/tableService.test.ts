import { isInFrame, createTable, aliveNeighbors, nextTick } from './tableService'

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

describe('Table service tests', () => {

  test('Cell in Frame', () => {
    const testCell = [2, 30]
    expect(isInFrame(testCell)).toBeTruthy()
  });

  test('Cell not in Frame', () => {
    const testCell = [2, 51]
    expect(isInFrame(testCell)).toBeFalsy()
  });

  test('create table length', () => {
    const testSize = 50
    expect(createTable(testSize).length).toBe(testSize)
    expect(createTable(testSize)[0].length).toBe(testSize)
  });

  test('aliveNeighbors test', () => {
    expect(aliveNeighbors(initTable, 2, 1)).toBe(3)
    expect(aliveNeighbors(initTable, 2, 2)).toBe(2)
    expect(aliveNeighbors(initTable, 0, 0)).toBe(0)
  });

  test('aliveNeighbors test', () => {
    expect(aliveNeighbors(initTable, 2, 1)).toBe(3)
    expect(aliveNeighbors(initTable, 2, 2)).toBe(2)
    expect(aliveNeighbors(initTable, 0, 0)).toBe(0)
  });

  test('next tick test', () => {
    expect(nextTick(initTable, 5)).toMatchObject(resultTable)
    expect(nextTick(resultTable, 5)).toMatchObject(initTable)
  });
})
