const cpfData = [];

const determineHousePoints = numberInHousehold => {

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

const determineHouseSizePts = houseSize => {

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


export {determineHousePoints, determineHouseSizePts};