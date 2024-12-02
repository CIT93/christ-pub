class FP {
    constructor(first, last, houseMembers, houseSize, houseFood, housePackage, dishWasher, washingMachine) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.houseFood = houseFood;
        this.housePackage = housePackage;
        this.dishWasher = dishWasher;
        this.washingMachine = washingMachine;
        this.houseHoldPoints();
        this.houseSizePoints();
        this.houseFoodPoints();
        this.housePackagePoints();
        this.dishwasherPoints();
        this.washingMachinePoints();
        this.total();
    }
    houseHoldPoints(){
            if (this.houseMembers === 1) {
                this.houseHoldPoints = 14;
            } else if (this.houseMembers ===2) {
                this.houseHoldPoints = 12;
            } else if (this.houseMembers ===3) {
                this.houseHoldPoints = 10;
            } else if (this.houseMembers ===4) {
                this.houseHoldPoints = 8;
            } else if (this.houseMembers ===5) {
                this.houseHoldPoints = 6;
            } else if (this.houseMembers ===6) {
                this.houseHoldPoints = 4;
            } else if (this.houseMembers > 6) {
                this.houseHoldPoints = 2;
            }
    }
    houseSizePoints(){
        if (this.houseSize === 'Large House') {
        this.houseSizePoints = 10;
    } else if(this.houseSize === 'Medium House') {
        this.houseSizePoints = 7;
    } else if(this.houseSize === 'Small House') {
        this.houseSizePoints = 4;
    } else if(this.houseSize === 'Apartment') {
        this.houseSizePoints = 2;
    }
    }
    houseFoodPoints(){
        if (this.houseFood === 'DMD') {
        this.houseFoodPoints = 10;
    } else if(this.houseFood === 'DMF') {
        this.houseFoodPoints = 8;
    } else if(this.houseFood === 'VEG') {
        this.houseFoodPoints = 4;
    } else if(this.houseFood === 'VEGAN') {
        this.houseFoodPoints = 2;
    }
    }

    housePackagePoints() {
        if (this.housePackage === 'Prep') {
        this.housePackagePoints = 12;
    } else if(this.housePackage === 'Half') {    
        this.housePackagePoints = 6;
    } else if(this.housePackage === 'Fresh') {
        this.housePackagePoints = 2;
    }
    }
    
    dishwasherPoints() {
        if(this.dishWasher === 'greaterThan') {
            this.dishwasherPoints = 3;
        } else if(this.dishWasher === 'betweenMid') {
            this.dishwasherPoints = 2;
        } else if(this.dishWasher === 'betweenLow') {
            this.dishwasherPoints = 1;
        } else if(this.dishWasher === 'dishwasherNone') {
            this.dishwasherPoints = 0;
        }
    }
    washingMachinePoints() {
        if(this.washingMachine === 'greaterThan2') {
            this.washingMachinePoints = 3;
        } else if(this.washingMachine === 'betweenMid2') {
            this.washingMachinePoints = 2;
        } else if(this.washingMachine === 'betweenLow2') {
            this.washingMachinePoints = 1;
        } else if(this.washingMachine === 'washingmachineNone') {
            this.washingMachinePoints = 0;
        }
    }



    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.houseFoodPoints + this.housePackagePoints + this.dishwasherPoints + this.washingMachinePoints;

        console.log(`Computed total: ${this.total}`); // Debugging line
    return this.total; // Ensure `this.total` is assigned
        }
    }

export {FP}
