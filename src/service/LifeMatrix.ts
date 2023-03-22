import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]){}
        get numbers() {
            return this._numbers;
        }
    
    nextStep(): number[][]{
        //fix in homework #36
        this._numbers = getRandomMatrix(this._numbers.length, this._numbers.length, 0, 1);
        return this._numbers;
    }
}