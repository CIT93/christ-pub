class FP {
    constructor(first, last, houseMembers, houseSize, houseFood, housePackage) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.houseFood = houseFood;
        this.housePackage = housePackage;
        this.houseHoldPoints();
        this.houseSizePoints();
        this.houseFoodPoints();
        this.housePackagePoints();
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
            } else {
        console.log("no points updated");
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
        if (this.housePackage === 'DMD') {
        this.housePackagePoints = 10;
    } else if(this.housePackage === 'DMF') {    
        this.housePackagePoints = 8;
    } else if(this.housePackage === 'VEG') {
        this.housePackagePoints = 4;
    } else if(this.housePackage === 'VEGAN') {
        this.housePackagePoints = 2;
    }
    }



    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.houseFoodPoints + this.housePackagePoints;
        }
    }

export {FP}
