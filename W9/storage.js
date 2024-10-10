const cpfData = getLS();

function saveLS(cpfData){
    const serializedArr = JSON.stringify(cpfData);
    localStorage.setItem("cfp", serializedArr);
}

function getLS(cpfData){
    const retrievedArr = localStorage.getItem("cpf");
    if (retrievedArr !== null){
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

export {cpfData, saveLS, getLS};