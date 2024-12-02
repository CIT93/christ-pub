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
        const fpObj = new FP(fName.value, lName.value, parseInt(form.members.value), form.size.value, form.foodChoice.value, form.foodPackaging.value, form.waterComsumption.value, form.waterComsumption2.value);
        cpfData.push(fpObj);
        saveLS(cpfData);
        renderTbl(cpfData);
        form.reset();
    } else {
        submit.textContent = "Form requires first and last name";
    }
    
});
//Code for the edit was already working with that last commit