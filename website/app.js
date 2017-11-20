//list
var list = [
    {name: 'Peter Parker', likes: 700},
    {name: 'Wade Winston Wilson', likes: 403},
    {name: 'Bruce Wayne', likes: 251},
    {name: 'Bruce Banner', likes: 218},
    {name: 'Tony Stark', likes: 135},
    {name: 'Diana Prince', likes: 133},
    {name: 'Clark Kent', likes: 122},
    {name: 'Steven Grant Rogers', likes: 117},
    {name: 'dash', likes: 0},
  ];

//counts length of list
var listLength = list.length;

//array w/ names
var listNames = list.map(a => a.name);

//array with # of likes
var listLikes = list.map(a => a.likes);
  


function add1(r) {
//creates editable cell
    var b = r.parentNode.parentNode.cells[1].textContent; 
//adds like
    var x =  parseInt(b) + 1;
    r.parentNode.parentNode.cells[1].innerHTML = x;
    
}

//Deletes candidate
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("candidateTable").deleteRow(i);
}

//Create Candidates
function createCandidate() {

    // counts rows to add new entry
    var x = document.getElementById("candidateTable").rows.length;

    var table = document.getElementById("candidateTable");
    
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById('candidateInput').value;
    cell2.innerHTML = '<p id ="likeNum"> 0 </p>';
    cell3.innerHTML = '<input type = "button" value ="Like" onclick = "add1(this)" />';
    cell4.innerHTML = '<input type = "button" value ="Delete" onclick = "deleteRow(this)" />';
    
    document.getElementById("candidateInput").reset();
    

    
    
    }
    


