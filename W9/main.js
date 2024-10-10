import { renderTbl } from "./render.js";
import { determineHousePoints, determineHouseSizePts } from "./cfp.js";
import { form } from "./global.js";
import { saveLS, cpfData } from "./storage.js";


function start(first, last, houseHoldMembers, houseSize2){
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
document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);

// Listen for form submission
document.getElementById('form').addEventListener('submit', function (event) {
    //Prevent default behavior
    event.preventDefault();
    const firstNameIsValid = document.getElementById('firstName').value !== '';
    const lastNameIsValid = document.getElementById('lastName').value !== '';
    if (firstNameIsValid && lastNameIsValid) {
        alert('Form is valid. You can proceed with submitting the form to the server.');
    }
})



form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const houseSize2 = form.size.value;
    const houseHoldMembers = parseInt(form.members.value);
    start(firstName, lastName, houseHoldMembers, houseSize2);
    saveLS(cpfData);
    renderTbl(cpfData);
    form.reset();

});