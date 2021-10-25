import {Data} from "./data/data.json.js";
const data = Data; 

export class Exercise{
    constructor(){
        this.currentDay = data[3].timeframes.daily.current;
        this.previousDay = data[3].timeframes.daily.previous;

        this.currentWeek = data[3].timeframes.weekly.current;
        this.previousWeek = data[3].timeframes.weekly.previous;

        this.currentMonth = data[3].timeframes.monthly.current;
        this.previousMonth = data[3].timeframes.monthly.previous;
    }
}