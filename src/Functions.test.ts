import { sumArray, minEvenNumber, mapperNumbers, sumMatrix } from "./util/functions";
import LifeMatrix from "./service/LifeMatrix";
import { getRandomMatrix } from "./util/random";

test("test matrix size", () => {
    const lifeMatrix = new LifeMatrix([
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]);
    const matrixSize: number[][] = lifeMatrix.nextStep()
    expect(matrixSize.length).toEqual(6)
})
test("test matrix part size", () => {
    const lifeMatrix = new LifeMatrix([
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]);
    const partMatrix = lifeMatrix.getMatrixPart(3, 3);
    expect(partMatrix).toEqual([
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ]);
});
test("test edge matrix part size", () => {
    const lifeMatrix = new LifeMatrix([
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]);
    const partMatrix = lifeMatrix.getMatrixPart(0, 0);
    expect(partMatrix).toEqual([
        [1, 0],
        [0, 0]
    ]);
});
test('test of partMatrix sum', () => {
    const lifeMatrix = new LifeMatrix([
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]);
    const partMatrix = lifeMatrix.getMatrixPart(3, 3);
    expect(sumMatrix(partMatrix)).toEqual(1)
})
test('test overpopulated ', () => {
    const lifeMatrix = new LifeMatrix([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ]);
    expect(lifeMatrix.getNewCell(1, 1)).toEqual(0)
})
test("test cell becomes alive", () => {
    const lifeMatrix = new LifeMatrix([
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
    ]);
    const newCell = lifeMatrix.getNewCell(1, 1);
    expect(newCell).toEqual(1);
});



