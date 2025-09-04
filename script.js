let i=1;
function insert_Row() {
   let table = document.getElementById("sampleTable");
  let cell1 = document.createElement('td');
let cell2 = document.createElement('td');

let row = document.createElement('tr');
cell1.innerText = `New Cell${i}`;
cell2.innerText = `New Cell${i+1}`;

row.appendChild(cell1);
row.appendChild(cell2);

table.tBodies[0].insertBefore(row,table.rows[0]);
  
  i++;
  
}


