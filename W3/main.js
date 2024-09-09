function determineHousePoints (numberInHousehold)  {
    console.log("Inside the function");

    if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold ===2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold ===3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold ===4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold ===5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold ===6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold >6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
    } else {
    console.log("no points updated");
}

console.log(`Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`);

}

function determineHouseSizePts(houseSize) {
    if (houseSize === 'Large House') {
        housePoints = housePoints + 10;
    } else if(houseSize === 'Medium House') {
        housePoints = housePoints + 7;
    } else if(houseSize === 'Small House') {
        housePoints = housePoints + 4;
    } else if(houseSize === 'Apartment') {
        housePoints = housePoints + 2;
    }

    console.log(`Based on the house size of a ${houseSize} the points would be ${housePoints}`);
}

let housePoints = 0;
let carbonFootprintPoints = 0; 
//const numberInHousehold = 5;


//global scope

determineHousePoints(5);
determineHouseSizePts("Medium House");

console.log(`The total amount of points is ${housePoints + carbonFootprintPoints}`);


// MY CODE WORKS!
