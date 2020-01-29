export const SIZE = 50;
export const ALIVE = 1;
export const DEAD = 0;

export const createTable = (size: number = SIZE): number[][] => {
  return Array(size).fill(0).map(() => Array(size).fill(0).map(() => Math.round(Math.random())));
}

export const getNeighbors = (x: number, y: number): number[][] => {
    return [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
        .filter(isInFrame)
}

export const isInFrame = (cell : number[], size: number = SIZE): boolean =>
  cell[0] >= 0 && cell[0] < size && cell[1] >= 0 && cell[1] < size

export const aliveNeighbors = (world: Array<any>, x: number, y: number): number => {
    return getNeighbors(x, y).filter(n => world[n[0]][n[1]] === ALIVE).length;
}

export const nextTick = (world: number[][], size: number = SIZE): number[][] => {
    let newWorld = createTable();
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const alive = aliveNeighbors(world, x, y);
            const cell = world[x][y];
            newWorld[x][y] = (alive === 3 || (alive === 2 && cell === ALIVE)) ? ALIVE : DEAD;
        }
    }
    return newWorld;
}
