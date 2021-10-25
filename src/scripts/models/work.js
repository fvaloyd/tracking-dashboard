import {Data} from "./data/data.json.js";
const data = Data; 

export class Work{
    constructor(){
        this.currentDay = data[0].timeframes.daily.current;
        this.previousDay = data[0].timeframes.daily.previous;

        this.currentWeek = data[0].timeframes.weekly.current;
        this.previousWeek = data[0].timeframes.weekly.previous;

        this.currentMonth = data[0].timeframes.monthly.current;
        this.previousMonth = data[0].timeframes.monthly.previous;
    }
}
