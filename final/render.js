import { TBL } from "./global.js";

// Render table header
const renderTblHeading = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Sleep Hours", "Quality", "Day of Week", "Sleep Score", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
};

// Handle row update
const onUpdate = (index, data) => {
    data.splice(index, 1); // Remove the row from data
    renderTbl(data); // Re-render the table
};

// Render buttons for editing and deleting rows
const renderTblBtn = (obj, index, data) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");

    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";

    td.appendChild(btnEdit);
    td.appendChild(btnDelete);

    // Delete button logic
    btnDelete.addEventListener("click", () => {
        onUpdate(index, data); // Deletes the row
    });

    // Edit button logic
    btnEdit.addEventListener("click", () => {
        document.getElementById("hoursSleep").value = obj.hoursSleep;
        document.getElementById("qualitySleep").value = obj.qualitySleep;
        document.getElementById("currentDay").value = obj.currentDay;
        onUpdate(index, data)
    });

    return td;
};

// Render table body
const renderTblBody = (data) => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");

        // Render each key-value pair as a table cell
        for (const key of ["hoursSleep", "qualitySleep", "currentDay", "sleepScore"]) {
            const td = document.createElement("td");
            td.textContent = obj[key];
            tr.appendChild(td);
        }

        // Append buttons to the row
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
};

// Render the entire table
const renderTbl = (data) => {
    TBL.innerHTML = ""; // Clear the table container

    // Display a message if no data is present
    if (data.length === 0) {
        TBL.innerHTML = "<p>No data available. Please add an entry.</p>";
        return;
    }

    const table = renderTblHeading(); // Create table header
    const tbody = renderTblBody(data); // Create table body
    table.appendChild(tbody); // Append body to table
    TBL.appendChild(table); // Add table to the container
};

export { renderTbl };
