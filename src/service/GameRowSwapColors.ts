import GameRowSimpleColors from "./GameRowSimpleColors";
import { CellType } from "../model/CellType";

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

    move(id: number): string | CellType[] {
        let res: string | CellType[]
        if (this.isOver()) {
            res = "game is over"
        } else {
            if(this.firstIndex == -1)
            id = this.firstIndex;
            res = JSON.parse(JSON.stringify(this.row));
            const resAr = res as CellType[]
            resAr[id].cellColor = "black"
            this.row = resAr;
        }
        this.count++;
        return res;
    }
    isOver(): boolean {
        return this.count === Math.floor(this.nCells / 2);            
    }
}