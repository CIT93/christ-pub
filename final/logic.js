import { OUTPUT } from "./global.js";
const findHoursScore = function (hoursSleep) {
    let sleepHoursScore = 0;

    switch (hoursSleep) {
        case 0: sleepHoursScore = 0; break;
        case 1: sleepHoursScore = 12.5; break;
        case 2: sleepHoursScore = 25; break;
        case 3: sleepHoursScore = 37.5; break;
        case 4: sleepHoursScore = 50; break;
        case 5: sleepHoursScore = 62.5; break;
        case 6: sleepHoursScore = 75; break;
        case 7: sleepHoursScore = 87.5; break;
        case 8: sleepHoursScore = 100; break;
        default: sleepHoursScore = 0; // Handle invalid input
    }

    return sleepHoursScore;
};

const sleepScoreCalc = function (qualitySleep) {
    let qualitySleepScore = 0;

    switch (qualitySleep) {
        case 'Horrible': qualitySleepScore = 0.1; break;
        case 'Bad': qualitySleepScore = 0.25; break;
        case 'Meh': qualitySleepScore = 0.45; break;
        case 'Okay': qualitySleepScore = 0.65; break;
        case 'Alright': qualitySleepScore = 0.7; break;
        case 'Good': qualitySleepScore = 0.85; break;
        case 'Great': qualitySleepScore = 0.9; break;
        case 'Excellent': qualitySleepScore = 1; break;
        default: qualitySleepScore = 0; // Handle invalid input
    }

    return qualitySleepScore;
};

const start = function (hoursSleep, qualitySleep) {
    const sleepHoursScore = findHoursScore(hoursSleep);
    const qualitySleepScore = sleepScoreCalc(qualitySleep);

    const sleepScore = sleepHoursScore * qualitySleepScore;

    return sleepScore;
};

const greatSleep = function (sleepScore) {
    if (sleepScore === 100) {
        OUTPUT.textContent += "You had a Perfect Night's Rest!";
    } else if (sleepScore > 90) {
        OUTPUT.textContent += "You had a great night's rest!";
    }
    return sleepScore;
};

const suggestNap = function (sleepScore, currentDay) {
    let napSuggestion = '';
    if (sleepScore < 50 && (currentDay === "Saturday" || currentDay === "Sunday")) {
        napSuggestion = "Take 1 nap today!";
    } else if (sleepScore === 0 && (currentDay === "Saturday" || currentDay === "Sunday")) {
        napSuggestion = "Please Sleep in!";
    }
    return napSuggestion;
};

export { start, greatSleep, suggestNap }