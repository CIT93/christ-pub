
const saveLS= function(cpfData){
    const serializedArr = JSON.stringify(cpfData);
    localStorage.setItem("cfp", serializedArr);
}

const getLS = function(){
    const retrievedArr = localStorage.getItem("cpf");
    if (retrievedArr !== null){
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

const cpfData = getLS();

export {cpfData, saveLS, getLS};