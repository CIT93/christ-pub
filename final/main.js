import { form, OUTPUT, TBL } from "./global.js";
import { start, greatSleep, suggestNap } from "./logic.js";
import { renderTbl } from "./render.js"; 



const data = []; // Store each entry
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const hoursSleep = parseInt(document.getElementById("hoursSleep").value);
    const qualitySleep = document.getElementById("qualitySleep").value;
    const currentDay = document.getElementById("currentDay").value;

    if (isNaN(hoursSleep) || !qualitySleep || !currentDay) {
        OUTPUT.textContent = "Please fill in all fields.";
        return;
    }

    const sleepScore = start(hoursSleep, qualitySleep);
    OUTPUT.textContent = `Your Sleep Score: ${sleepScore} `;
    data.push({ hoursSleep, qualitySleep, currentDay, sleepScore });
    renderTbl(data);
    OUTPUT.textContent += suggestNap(sleepScore, currentDay); 
    console.log("Form reset ic called!")
    form.reset();
});
