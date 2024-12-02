import {form, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name","Household", "HouseSize", "FoodChoice", "FoodPackaging", "Dishwasher Usage", "Washing Machine Usage", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    }); 
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
    const td = document.createElement("td")
    const btnEdit =  document.createElement("button");
    const btnDelete =  document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    btnDelete.addEventListener('click', function(e){
        console.log(e);
       onUpdate(index, data);
    })
    btnEdit.addEventListener('click', function(e){
        form[1].value = obj.first
        form[2].value = obj.last
        form[3].value = obj.houseSize
        form[4].value = obj.houseMembers
        form[5].value = obj.houseFood
        form[6].value = obj.housePackage
        form[7].value = obj.dishWasher
        form[8].value = obj.washingMachine


        onUpdate(index, data);
    })
    return td;
}

const renderTblBody = data => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) =>{
        const tr = document.createElement("tr");
        const keys = ["first", "houseMembers", "houseSize", "houseFood","housePackage", "dishWasher", "washingMachine", "total"]
        keys.forEach(key =>{
            const td = document.createElement("td");
                td.textContent = obj[key];
                tr.appendChild(td);
        });
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0){
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);

         // Calculate the average of the "total" footprint values
         const average = calculateAverage(data);

         // Add a new row for the average at the bottom of the table
         const averageRow = document.createElement("tr");
         const averageCell = document.createElement("td");
         averageCell.colSpan = 8;  // Span across all columns except "Actions"
         averageCell.textContent = `Average Footprint: ${average}`;
         averageRow.appendChild(averageCell);
 
         // Append an empty cell for the "Actions" column
         const actionsCell = document.createElement("td");
         averageRow.appendChild(actionsCell);
 
         // Append the average row to the table
         table.appendChild(averageRow);

        TBL.appendChild(table);
    }
}

const calculateAverage = (data) => {
    const totalSum = data.reduce((sum, entry) => sum + entry.total, 0);
    const average = totalSum / data.length;
    return average.toFixed(2);  // Format to 2 decimal place
};

export {renderTbl};