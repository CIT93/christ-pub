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

console.log(
    `Based on the number of members of the household of ${numberInHousehold} the points would be ${houseHoldPoints}`
);
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

    console.log(`Based on the house size of a ${houseSize} the points would be ${housePoints}`);

    return housePoints;
}


function start(houseHoldMembers, houseSize2){
    const houseHoldPts = determineHousePoints(houseHoldMembers[0]);
    console.log(houseHoldPts);

    const houseSizePts = determineHouseSizePts(houseSize2[1]);
    console.log(houseSizePts);

    const totalPoints = houseHoldPts + houseSizePts;
    console.log(`The total amount of points is ${totalPoints}`);

    cpfData.push([houseHoldMembers, houseSize2, houseHoldPts, houseSizePts, totalPoints]);
    console.log(cpfData);
}

//const myInputs = [5, "Apartment"]; //on the global scope

//I think not because it can become too jumbled!

start(5, "Apartment");
start(1, "Large House");


//It would go before the return

//Array

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[1]);
console.log(myArr[4]);
console.log(myArr[0] = 10);
console.log(myArr.push[1]);

// by putting it in the global scope?



