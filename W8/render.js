const TBL = document.getElementById("tab-data")

function renderTblHeading (){
    TBL.innerHTML ="";
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

function renderTblBtn(index, data){
    const td = document.createElement("td")
    const btnEdit =  document.createElement("button");
    const btnDelete =  document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    btnDelete.addEventListener('click', function(e){
        console.log('Hello from inside the delete button');
        console.log(e);
        data.splice(index, 1);
        renderTbl(data);
        renderTblHeading();
    })
    btnEdit.addEventListener('click', function(e){
        const rowData = data[index]; 
        form.firstname.value = rowData.firstObj; 
        form.lastname.value = rowData.lastObj;
        form.size.value = rowData.houseSize2Obj;
        form.members.value = rowData.houseHouldMembersObj;
        data.splice(index, 1); 
        renderTbl(data); 
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
                console.log("build it");
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }

        }
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data){
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export {renderTbl};