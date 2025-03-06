// Makes tables sortable by column. Include this, then modify your tables as follows:
//
// (1) Add an id to your table:
// 		<table id="sortableTable">
// (2) Give the th tags an onclick caalling the sortTable function, passing the column index (starting at 0) and table id:
// 		<th onclick="sortTable(0, 'sortableTable')">

function sortTable(columnIndex, tableId) {
    let table = document.getElementById(tableId);
    let rows = Array.from(table.rows).slice(1); // Get all rows except headers
    let ascending = table.getAttribute("data-sort") !== "asc";
    
    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.trim();
        let cellB = rowB.cells[columnIndex].innerText.trim();
        let numA = parseFloat(cellA);
        let numB = parseFloat(cellB);
        
        if (!isNaN(numA) && !isNaN(numB)) {
            return ascending ? numA - numB : numB - numA;
        }
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    table.setAttribute("data-sort", ascending ? "asc" : "desc");

    rows.forEach(row => table.appendChild(row)); // Reattach sorted rows
}