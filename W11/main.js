import { renderTbl } from "./render.js";
import { determineHousePoints, determineHouseSizePts } from "./cfp.js";
import { form, fName, lName, submit } from "./global.js";
import { saveLS, cpfData } from "./storage.js";
import { FP } from "./fp.js";




const start = (first, last, houseHoldMembers, houseSize2) => {
    const houseHoldPts = determineHousePoints(houseHoldMembers);
    const houseSizePts = determineHouseSizePts(houseSize2);
    const totalPoints = houseHoldPts + houseSizePts;
    cpfData.push({
        firstName: first,
        lastName: last,
            houseHold: houseHoldMembers,
            houseS2: houseSize2,
            housePts: houseHoldPts,
            houseSpts: houseSizePts,
            houseTtl: totalPoints,
    });

}

renderTbl(cpfData);

const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

// Attach blur event listeners
fName.addEventListener('blur', validateField);
lName.addEventListener('blur', validateField);


form.addEventListener('submit', e =>{
    e.preventDefault();
    if (fName.value !== '' && lName.value !== '') {
        // start(fName.value, lName.value, parseInt(form.members.value), form.size.value);
        const fpObj = new FP(fName.value, lName.value, parseInt(form.members.value), form.size.value);
        // fpObj.houseHoldPoints();
        // fpObj.houseSizePoints();
        cpfData.push(fpObj);
        saveLS(cpfData);
        renderTbl(cpfData);
        form.reset();
    } else {
        submit.textContent = "Form requires first and last name";
    }
    
});

// const me = {
//     name: "Chris",
//     hairColor: "Blonde",
//     location: "office",
//     sleepScore: 87,
//     introduce: function (){
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now`)
//     }
// }

// const you = {
//     name: "Ryan",
//     hairColor: "Black",
//     location: "Home",
//     sleepScore: 29,
//     introduce: function (){
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now`)
//     }
// }

// me.introduce();
// you.introduce();

class Human {
    constructor(name, hairColor, location, sleepScore){
        this.name = name
        this.hairColor = hairColor
        this.location = location
        this.sleepScore = sleepScore
    }
    introduce(){
        console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleep score of ${this.sleepScore}`)
    }
}

const chris = new Human("Chris", "Blonde", "Office", 87);
const ryan = new Human("Ryan", "Black", "Home", 29);

chris.introduce();
ryan.introduce();

chris.hrv = 50;