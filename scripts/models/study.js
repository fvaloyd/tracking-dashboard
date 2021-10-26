import {Data} from "./data/data.json.js";
const data = Data; 

export class Study{
    constructor(){
        this.currentDay = data[2].timeframes.daily.current;
        this.previousDay = data[2].timeframes.daily.previous;

        this.currentWeek = data[2].timeframes.weekly.current;
        this.previousWeek = data[2].timeframes.weekly.previous;

        this.currentMonth = data[2].timeframes.monthly.current;
        this.previousMonth = data[2].timeframes.monthly.previous;
    }
}