import { renderTbl } from "./render.js";
import { determineHousePoints, determineHouseSizePts } from "./cfp.js";
import { form, fName, lName, submit } from "./global.js";
import { saveLS, cpfData } from "./storage.js";




const start = function(first, last, houseHoldMembers, houseSize2){
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

const validateField = function(event) {
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


form.addEventListener('submit', function(e){
    e.preventDefault();
    if (fName.value !== '' && lName.value !== '') {
        // const houseSize2 = form.size.value;
        // const houseHoldMembers = parseInt(form.members.value);
        start(fName.value, lName.value, parseInt(form.members.value), form.size.value);
        saveLS(cpfData);
        renderTbl(cpfData);
        form.reset();
    } else {
        submit.textContent = "Form requires first and last name";
    }
    
});


const add2 = function(a = 10) {
    return 2 + a[3];
}

const  result = add2(1, 2, 3, 4);

(function(a) {
    console.log("inside IIFE");
    console.log(a);
})(a);
