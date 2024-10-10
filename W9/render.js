import {form, TBL} from "./global.js";
import { saveLS } from "./storage.js";

function renderTblHeading (){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name","Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    }); 
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function onUpdate(index, data){
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

function renderTblBtn(obj, index, data){
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
        form[1].value = obj.firstName
        form[2].value = obj.lastName
        form[3].value = obj.houseS2
        form[4].value = obj.houseHold
        onUpdate(index, data);
    })
    return td;
}

function renderTblBody(data){
    const tbody = document.createElement("tbody");
    data.forEach(function(obj, index){
        console.log(index);
        const tr = document.createElement("tr");
        for(const [key, value] of Object.entries(obj)){
            if(key !== "lastName" && key !== "housePts" && key !== "houseSpts"){
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }

        }
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data){
    TBL.innerHTML = "";
    if (data.length !== 0){
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
    }
}

export {renderTbl};