import {Data} from "./data/data.json.js";
const data = Data; 

export class Areas{
    constructor(posicion){
        this.posicion = posicion;
        this.currentDay = data[this.posicion].timeframes.daily.current;
        this.previousDay = data[this.posicion].timeframes.daily.previous;

        this.currentWeek = data[this.posicion].timeframes.weekly.current;
        this.previousWeek = data[this.posicion].timeframes.weekly.previous;

        this.currentMonth = data[this.posicion].timeframes.monthly.current;
        this.previousMonth = data[this.posicion].timeframes.monthly.previous;
    }
}
