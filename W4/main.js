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
    cpfData.push([houseHoldMembers, houseSize2, houseHoldPts, houseSizePts, totalPoints]);

}

function displayOutput() {
    for (arr of cpfData){
        console.log(arr)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `Carbon Footpring total is ${arr[4]}`;
        newP.textContent = `Appartment type is ${arr[1]}`;
        output.appendChild(newP);
    }
}

function displayOutputHouse() {
    for (arr of cpfData){
        console.log(arr)
        const output = document.getElementById("output2");
        const newP = document.createElement("P");
        newP.textContent = `Appartment type is ${arr[1]}`;
        output.appendChild(newP);
    }
}


start(5, "Apartment");
start(1, "Large House");

displayOutput()


