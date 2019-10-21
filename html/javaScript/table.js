// Creating Table for the output.
//===============================================================================================

  function addCell(tr, val) {
    var td = document.createElement('td');

    td.innerHTML = val;

    tr.appendChild(td)
  }


  function addRow(tbl, itemName, type, quantity, desc) {
    var tr = document.createElement('tr');

    addCell(tr, itemName);
    addCell(tr, quantity);
    addCell(tr, type);
    addCell(tr, desc);

    tbl.appendChild(tr)
  }

  function main() {
    tbl = document.getElementById('tbl');
    
  }
