class FP {
    constructor(first, last, houseMembers, houseSize, houseFood, housePackage, dishWasher, washingMachine, makePurchases, producingWaste, recycle) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.houseFood = houseFood;
        this.housePackage = housePackage;
        this.dishWasher = dishWasher;
        this.washingMachine = washingMachine;
        this.makePurchases = makePurchases;
        this.producingWaste = producingWaste;
        this.recycle = recycle;
        this.houseHoldPoints();
        this.houseSizePoints();
        this.houseFoodPoints();
        this.housePackagePoints();
        this.dishwasherPoints();
        this.washingMachinePoints();
        this.madePurchasesPoints();
        this.wasteProductionPoints();
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
        if (this.houseFood === 'Domestic Meat Daily') {
        this.houseFoodPoints = 10;
    } else if(this.houseFood === 'Domestic Meat A Few Times') {
        this.houseFoodPoints = 8;
    } else if(this.houseFood === 'Vegetarian') {
        this.houseFoodPoints = 4;
    } else if(this.houseFood === 'Vegan') {
        this.houseFoodPoints = 2;
    }
    }

    housePackagePoints() {
        if (this.housePackage === 'Prepackaged') {
        this.housePackagePoints = 12;
    } else if(this.housePackage === 'Half Fresh Half Not') {    
        this.housePackagePoints = 6;
    } else if(this.housePackage === 'Fresh Only') {
        this.housePackagePoints = 2;
    }
    }
    
    dishwasherPoints() {
        if(this.dishWasher === 'More Than 9 Times') {
            this.dishwasherPoints = 3;
        } else if(this.dishWasher === 'Between 4 and 9 Times') {
            this.dishwasherPoints = 2;
        } else if(this.dishWasher === 'Between 1 and 3 Times') {
            this.dishwasherPoints = 1;
        } else if(this.dishWasher === 'None') {
            this.dishwasherPoints = 0;
        }
    }
    washingMachinePoints() {
        if(this.washingMachine === 'More than 9 Times') {
            this.washingMachinePoints = 3;
        } else if(this.washingMachine === 'Between 4 And 9 Times') {
            this.washingMachinePoints = 2;
        } else if(this.washingMachine === 'Between 1 And 3 Times') {
            this.washingMachinePoints = 1;
        } else if(this.washingMachine === 'None Also') {
            this.washingMachinePoints = 0;
        }
    }
    madePurchasesPoints() {
        if(this.makePurchases === 'More than 7 Pieces') {
            this.madePurchasesPoints = 10;
        } else if(this.makePurchases === 'Between 5 and 7 Pieces') {
            this.madePurchasesPoints = 8;
        } else if(this.makePurchases === 'Between 3 and 5 Pieces') {
            this.madePurchasesPoints = 6;
        } else if(this.makePurchases === 'Less than 3 Pieces') {
            this.madePurchasesPoints = 4;
        } else if(this.makePurchases === 'Second Hand Only') {
            this.madePurchasesPoints = 2;
        }
    }
    wasteProductionPoints() {
        if(this.producingWaste === 'Four Cans') {
            this.wasteProductionPoints = 50;
        } else if(this.producingWaste === 'Three Cans') {
            this.wasteProductionPoints = 40;
        } else if(this.producingWaste === 'Two Cans') {
            this.wasteProductionPoints = 30; 
        } else if(this.producingWaste === 'One Can') {
            this.wasteProductionPoints = 20;
        } else if(this.producingWaste === 'Half a Can') {
            this.wasteProductionPoints = 5;
        }
    }
    total() {
        this.total = 
    (this.houseHoldPoints || 0) + 
    (this.houseSizePoints || 0) + 
    (this.houseFoodPoints || 0) + 
    (this.housePackagePoints || 0) + 
    (this.dishwasherPoints || 0) + 
    (this.washingMachinePoints || 0) + 
    (this.madePurchasesPoints || 0) + 
    (this.wasteProductionPoints || 0) +
    (this.recycle.recyclePoints || 0);

        console.log(`Computed total: ${this.total}`); // Debugging line
    return this.total; // Ensure `this.total` is assigned
        }
    }

export {FP}
