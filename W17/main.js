import { renderTbl } from "./render.js";
import { form, fName, lName, submit } from "./global.js";
import { saveLS, cpfData } from "./storage.js";
import { FP } from "./fp.js";


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


const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return {
        glass: e.target.glass.checked,
        plastic: e.target.plastic.checked,
        paper: e.target.paper.checked,
        aluminum: e.target.aluminum.checked,
        steel: e.target.steel.checked,
        food: e.target.food.checked,
        recyclePoints: (24 - (numberChecked * 4))
    }
}

form.addEventListener('submit', e =>{
    e.preventDefault();
    if (fName.value !== '' && lName.value !== '') {
        const fpObj = new FP(fName.value, 
        lName.value, 
        parseInt(e.target.members.value), 
        e.target.size.value, 
        e.target.foodChoice.value, 
        e.target.foodPackaging.value, 
        e.target.waterConsumption.value, 
        e.target.waterConsumption2.value, 
        e.target.familyPurchase.value, 
        e.target.wasteProduct.value,
        e.target.personalVehicle.value,
        e.target.publicTransportation.value,
        e.target.flights.value,
        determineRecycleItems(e)
    );
        cpfData.push(fpObj);
        saveLS(cpfData);
        renderTbl(cpfData);
        form.reset();
    } else {
        submit.textContent = "Form requires first and last name";
    }
    
});
//My Code for the second half of the water consumption was already coded
//:)