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
    checkFn(check: number, value: number){
        const checkValue = value;
        const checkRes = check;       
        return checkValue === 1
        ? (checkRes < 2 || checkRes > 3 ? 0 : 1)
        : (checkRes === 3 ? 1 : checkValue);;
    }
}