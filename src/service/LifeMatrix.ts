import { checkPrimeSync } from "crypto";


export default class LifeMatrix {
    constructor(private _numbers: number[][]) { }
    get numbers() {
        return this._numbers;
    }

    nextStep(): number[][] {
        return this._numbers = this._numbers.map((row, i) => {
            return row.map((value, j) => {
                const check = (row[j - 1] || 0) + (row[j + 1] || 0) +
                    (this._numbers[i - 1]?.[j - 1] || 0) + (this._numbers[i - 1]?.[j] || 0) +
                    (this._numbers[i - 1]?.[j + 1] || 0) + (this._numbers[i + 1]?.[j - 1] || 0) +
                    (this._numbers[i + 1]?.[j] || 0) + (this._numbers[i + 1]?.[j + 1] || 0);
                return this.checkFn(check, value);
            }
            );
        });

    }
    checkFn(check: number, value: number): number {
        const checkValue: number = value;
        const checkRes: number = check;
        if (checkValue === 1 && checkRes < 2) {
            return 0;
        } else if (checkValue === 1 && (2 <= checkRes && checkRes <= 3)) {
            return 1;
        } else if (checkValue === 1 && checkRes > 3) {
            return 0;
        } else if (checkValue === 0 && checkRes === 3) {
            return 1;
        }
        return checkValue;
    }
}