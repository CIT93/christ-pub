
const TBL = document.getElementById("tab-data")

function renderTbHeading (){
    const table = document.createElement("table");
    table.setAttribute("id", "data-table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    }); 
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTbl(data){
    let table = document.getElementById("data-table");

    if (!table) {
        table = renderTbHeading();
        TBL.appendChild(table);
    }

    const tbody = table.querySelector("tbody") || document.createElement("tbody")
    const tr = document.createElement("tr");
    const trTextArr = [];
    trTextArr.push(document.getElementById("firstname").value + " " + document.getElementById("lastname").value);  // Combine firstname and lastname
    trTextArr.push(document.getElementById("house").value);
    trTextArr.push(document.getElementById("members").value);
    
    trTextArr.forEach(function(text){
        const td = document.createElement("td")
        td.textContent = text;
        tr.appendChild(td);
    })
    const td = document.createElement("td")
    const btnEdit =  document.createElement("button");
    const btnDelete =  document.createElement("button");
    btnEdit.textContent = "Edit"
    btnDelete.textContent = "Delete"

    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export {renderTbl, renderTbHeading};