import {Data} from "./data/data.json.js";
const data = Data; 

export class Self{
    constructor(){
        this.currentDay = data[5].timeframes.daily.current;
        this.previousDay = data[5].timeframes.daily.previous;

        this.currentWeek = data[5].timeframes.weekly.current;
        this.previousWeek = data[5].timeframes.weekly.previous;

        this.currentMonth = data[5].timeframes.monthly.current;
        this.previousMonth = data[5].timeframes.monthly.previous;
    }
}