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

// function displayOutObj(obj) {
//     console.log(obj);
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${obj.houseTtl}`;
//     output.appendChild(newH2);

// }


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
    
    for (obj of cpfData) {
        console.log(obj)
        
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.houseTtl}`;
        
        const newH3 = document.createElement("h3");
        newH3.textContent = 'Based on the size of the home';
        
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${obj.houseHold} (score: ${obj.housePts}).`;
        newP.textContent += ` and a ${obj.houseS2} size of home (score:${obj.houseSpts}).`;
        
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);
    }
}



start(5, "Apartment");
start(1, "Large House");
start(10, "Small House")

console.log(cpfData);

displayOutput();