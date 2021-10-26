import { Work } from "./models/work.js";
import { Play } from "./models/play.js";
import { Study } from "./models/study.js";
import { Exercise } from "./models/exercise.js";
import { Social } from "./models/social.js";
import { Self } from "./models/self.js";

const work = new Work();
const play = new Play();
const study = new Study();
const exercise = new Exercise();
const social = new Social();
const self = new Self();


let workHours = document.getElementById("workHours");
let workLast = document.getElementById("workLast");

let playHours = document.getElementById("playHours");
let playLast = document.getElementById("playLast");

let studyHours = document.getElementById("studyHours");
let studyLast = document.getElementById("studyLast");

let exerciseHours = document.getElementById("exerciseHours");
let exerciseLast = document.getElementById("exerciseLast");

let socialHours = document.getElementById("socialHours");
let socialLast = document.getElementById("socialLast");

let selfHours = document.getElementById("selfHours");
let selfLast = document.getElementById("selfLast");


let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");


const plantilla = (currentWork,lastWork,currentPlay,lastPlay,currentStudy,lastStudy,currentExercise,lastExercise,currentSocial,lastSocial,currentSelf,lastSelf, valor) => {
    workHours.textContent = `${currentWork}Hrs`;
    workLast.textContent = `Last ${valor} - ${lastWork}hrs`;

    playHours.textContent = `${currentPlay}Hrs`;
    playLast.textContent = `Last ${valor} - ${lastPlay}hrs`;

    studyHours.textContent = `${currentStudy}Hrs`;
    studyLast.textContent = `Last ${valor} - ${lastStudy}hrs`;

    exerciseHours.textContent = `${currentExercise}Hrs`;
    exerciseLast.textContent = `Last ${valor} - ${lastExercise}hrs`;

    socialHours.textContent = `${currentSocial}Hrs`;
    socialLast.textContent = `Last ${valor} - ${lastSocial}hrs`;

    selfHours.textContent = `${currentSelf}Hrs`;
    selfLast.textContent = `Last ${valor} - ${lastSelf}hrs`;
}

daily.addEventListener('click', ()=>{
    plantilla(work.currentDay,work.previousDay, play.currentDay,play.previousDay, study.currentDay, study.previousDay, exercise.currentDay, exercise.previousDay, social.currentDay, social.previousDay, self.currentDay, self.previousDay, "Day");
    daily.style.color = 'white';
    weekly.style.color = '';
    monthly.style.color = '';
});

weekly.addEventListener('click', ()=>{
    plantilla(work.currentWeek,work.previousWeek, play.currentWeek,play.previousWeek, study.currentWeek, study.previousWeek, exercise.currentWeek, exercise.previousWeek, social.currentWeek, social.previousWeek, self.currentWeek, self.previousWeek, "Week");
    weekly.style.color = 'white';
    daily.style.color = '';
    monthly.style.color ='';
});

monthly.addEventListener('click', ()=>{
    plantilla(work.currentMonth,work.previousMonth, play.currentMonth,play.previousMonth, study.currentMonth, study.previousMonth, exercise.currentMonth, exercise.previousMonth, social.currentMonth, social.previousMonth, self.currentMonth, self.previousMonth, "Month");
    monthly.style.color = 'white';
    daily.style.color = '';
    weekly.style.color = '';
});

plantilla(work.currentWeek,work.previousWeek, play.currentWeek,play.previousWeek, study.currentWeek, study.previousWeek, exercise.currentWeek, exercise.previousWeek, social.currentWeek, social.previousWeek, self.currentWeek, self.previousWeek, "Week");
weekly.style.color = 'white';

