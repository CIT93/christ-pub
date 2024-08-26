console.log("hello from inside the main.js file");

//let myVar;

const myVar = "AHHH";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`);


function runNow () {
    if(myVarType === "number") {
        console.log(`will this one run?`);
    } else {
        console.log(`Or will this one run?`);
    };
}
runNow();

