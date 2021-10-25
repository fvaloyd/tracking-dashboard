import {Data} from "./data/data.json.js";
const data = Data; 

export class Social{
    constructor(){
        this.currentDay = data[4].timeframes.daily.current;
        this.previousDay = data[4].timeframes.daily.previous;

        this.currentWeek = data[4].timeframes.weekly.current;
        this.previousWeek = data[4].timeframes.weekly.previous;

        this.currentMonth = data[4].timeframes.monthly.current;
        this.previousMonth = data[4].timeframes.monthly.previous;
    }
}

