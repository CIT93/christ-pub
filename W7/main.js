import { renderTbl } from "./render.js";
import { start } from "./cfp.js";

const form = document.getElementById("form");
const OUTPUT = document.getElementById("output")
const cpfData = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const houseSize2 = form.size.value;
    const houseHoldMembers = parseInt(form.members.value);
    start(houseHoldMembers, houseSize2);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(cpfData);
    form.reset();

});