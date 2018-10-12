var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

var butt = document.querySelector("button");
var table = document.getElementById("myTable");
document.getElementById('datePicker').valueAsDate = new Date();

var data = JSON.parse(localStorage.getItem('data') || '[]');

readJsonFile(data, function(data)
{
    console.log(JSON.stringify(data));
    arr = data;
    for(i=0; i<arr.length; i++) {       
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = arr[i].fName;
        cell2.innerHTML = arr[i].lName;
        cell3.innerHTML = arr[i].tInput;
    };
});

butt.addEventListener("click", function(){
    var fName = document.getElementById("title").value;
    var lName = document.getElementById("datePicker").value;
    var tInput = document.getElementById("textField").value;
    arr.push({fName, lName, tInput})
    document.getElementById("title").value = "";
    document.getElementById("datePicker").value="";
    document.getElementById("textField").value="";      
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = tInput;

    localStorage.setItem('data', JSON.stringify(arr));
});

function readJsonFile(jsonData, callback)
{
    callback(jsonData);
}
