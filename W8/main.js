import { renderTbl } from "./render.js";
import { determineHousePoints, determineHouseSizePts } from "./cfp.js";

const form = document.getElementById("form");
const OUTPUT = document.getElementById("output")
const cpfData = [];


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
form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const houseSize2 = form.size.value;
    const houseHoldMembers = parseInt(form.members.value);
    start(firstName, lastName, houseHoldMembers, houseSize2);
    OUTPUT.innerHTML = "";
    renderTbl(cpfData);
    form.reset();

});