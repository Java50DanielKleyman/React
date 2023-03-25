import { sumArray, minEvenNumber, mapperNumbers, sumMatrix } from "./util/functions";
import LifeMatrix from "./service/LifeMatrix";
import { getRandomMatrix } from "./util/random";
import lifeGameConfig from './config/lifeGameConfig.json'

const dimensions = lifeGameConfig.dimensions;
const lifeMatrix = new LifeMatrix(getRandomMatrix(dimensions,
    dimensions, 0, 1));
test("test matrix size", () => {
    const randomMatrix: number[][] = lifeMatrix.nextStep()
    expect(randomMatrix.length).toEqual(10)
})
test("test matrix part size", () => {
const partMatrix = lifeMatrix.getMatrixPart(9,9);
expect(partMatrix.length).toEqual(3);
})
test ('test of partMatrix sum', () => {
    const partMatrix = lifeMatrix.getMatrixPart(6,9)
    expect(sumMatrix(partMatrix)).toEqual(1)
})

// test("test function sumArray", () => {
//     const array: number[] = [1, 2, 3];
//     expect(sumArray(array)).toEqual(6);
// });
// test("test function minEvenNumbers with at least one even number",
// () => {
//     const array: number[] = [-1, 1, 2, 3, 5];
//     expect(minEvenNumber(array)).toEqual(2)
// }
// );
// test('test minEvenNumber with no even number', () => {
//     const array: number[] = [-1, 1, 5, 7, 3];
//     expect(minEvenNumber(array)).toBeUndefined();
// });
// test ('test mapper', () => {
//     const sourceAr: number[] = [1, 2, 3];
//     const expectedAr: number[] = [1, 4, 9];
//     expect(mapperNumbers(sourceAr, num => num ** 2)).toEqual(expectedAr)
// })
// test ('test of sumMatrix', () => {
//     const matrix = [
//         [1, 0, 0, 0 ,1],
//         [0, 0, 0, 0 ,1],
//     ];
//     expect(sumMatrix(matrix)).toEqual(3)
// })