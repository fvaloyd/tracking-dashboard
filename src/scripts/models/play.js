import {Data} from "./data/data.json.js";
const data = Data; 

export class Play{
    constructor(){
        this.currentDay = data[1].timeframes.daily.current;
        this.previousDay = data[1].timeframes.daily.previous;

        this.currentWeek = data[1].timeframes.weekly.current;
        this.previousWeek = data[1].timeframes.weekly.previous;

        this.currentMonth = data[1].timeframes.monthly.current;
        this.previousMonth = data[1].timeframes.monthly.previous;
    }
}

