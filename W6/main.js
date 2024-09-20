const form = document.getElementById("form");
const OUTPUT = document.getElementById("output")
const cpfData = [];

function determineHousePoints (numberInHousehold)  {

    let houseHoldPoints = 0;

    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold ===2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold ===3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold ===4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold ===5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold ===6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    } else {
    console.log("no points updated");
}

    return houseHoldPoints;
}

function determineHouseSizePts(houseSize) {

    let housePoints = 0;

    if (houseSize === 'Large House') {
        housePoints = 10;
    } else if(houseSize === 'Medium House') {
        housePoints = 7;
    } else if(houseSize === 'Small House') {
        housePoints = 4;
    } else if(houseSize === 'Apartment') {
        housePoints = 2;
    }


    return housePoints;
}
function start(houseHoldMembers, houseSize2){
    const houseHoldPts = determineHousePoints(houseHoldMembers);
    const houseSizePts = determineHouseSizePts(houseSize2);
    const totalPoints = houseHoldPts + houseSizePts;
    
    cpfData.push({houseHold: houseHoldMembers,
        houseS2: houseSize2,
        housePts: houseHoldPts,
        houseSpts: houseSizePts,
        houseTtl: totalPoints});

}

function displayOutput() {
    const output = document.getElementById("output");
    
    for ( const obj of cpfData) {
        console.log(obj)
        
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.houseTtl}`;
        
        const newH3 = document.createElement("h3");
        newH3.textContent = 'Based on the size of the home';
        
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${obj.houseHold} (score: ${obj.housePts}).`;
        newP.textContent += ` and a ${obj.houseS2} size of home (score:${obj.houseSpts}).`;
        
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}
console.log(cpfData);

displayOutput();

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const houseSize2 = form.size.value;
    const houseHoldMembers = parseInt(form.members.value);
    start(houseHoldMembers, houseSize2);
    OUTPUT.innerHTML = "";
    displayOutput();
    form.reset();

});

//incorrect or nonvalidating data can cause user confusion and possible code errors.