import GameRowSimpleColors from "./GameRowSimpleColors";
import { CellType } from "../model/CellType";
import { getColors } from "../util/colors";
import { getRandomElement } from "../util/random";

export default class GameRowSwapColors extends GameRowSimpleColors {
    count: number;
    nCells: number;
    firstIndex: number;
    
    constructor(nCells: number) {
        super(nCells)
        this.nCells = nCells;
        this.count = 0;
        this.firstIndex = -1;
           }
getInitialRow(): CellType[] {
    this.count = 0;
    this.firstIndex = -1;
    return this.row = Array.from({ length: this.nCells })
    .map((__, index) => ({
        cellColor: getRandomElement(getColors()) as string,
        borderColor: "black", cellContent: '', id: index
    }))
}
    move(id: number): string | CellType[] {
        let res: string | CellType[]
        if (this.isOver()) {
            res = "game is over"
        } else if (this.firstIndex == -1) {
            this.firstIndex = id;
            res = JSON.parse(JSON.stringify(this.row));
        } else {
            res = this.swabFn(id)
        }
        this.count++;
        return res;
    }
    swabFn(id: number): string | CellType[] {
        let res: string | CellType[];
        res = JSON.parse(JSON.stringify(this.row));
        let resAr = res as CellType[]
        if (this.firstIndex <= id) {
            resAr = this.swabFnPlus(resAr, id);
        }
        else {
            resAr = this.swabFnMinus(resAr, id);
        }
        this.row = resAr;
        this.firstIndex = -1;
        return res;
    }
    swabFnPlus(arr: CellType[], id: number): CellType[] {
        const resAr = arr
        for (let i = this.firstIndex; i <= id; i++) {
            resAr[i].cellColor = "black"
        }
        return resAr;
    }
    swabFnMinus(arr: CellType[], id: number): CellType[] {
        const resAr = arr;
        for (let i = id; i <= this.firstIndex; i++) {
            resAr[i].cellColor = "black"
        }
        return resAr;
    }
    isOver(): boolean {
        return this.count === Math.floor(this.nCells / 2);
    }
}