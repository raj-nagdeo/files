

    var dataTable =  document.getElementById("datatable");  
    

function row() {
        var rowLength = dataTable.rows.length;  
    var r = dataTable.insertRow(rowLength);  
    var c1 = r.insertCell(0);  
    var c2 = r.insertCell(1);  

    var firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("placeholder","First Name");

    var lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("placeholder","Last Name");

    c1.appendChild(firstNameInput);  
    c2.appendChild(lastNameInput);  
}

function getData() {  
    var rowLength = dataTable.rows.length;  
    var dataArray = [];
for (i = 0; i < rowLength; i++){

    
   
   const firstName = dataTable.rows[i].cells[0].children[0].value;
   const lastName = dataTable.rows[i].cells[1].children[0].value;

   
    var nameData ={"firstname":firstName,"lastname":lastName};
    dataArray.push(nameData);
   
    

    }
    window.sessionStorage.setItem("items", JSON.stringify(dataArray));
}

function getDetails() {
    // alert("show data button clicked");
    var dataArray = JSON.parse(sessionStorage.getItem("items"));
    console.log(dataArray);
    for (let i = 0; i < dataArray.length; i++) {
       const fname=dataArray[i].firstname;
       const lname=dataArray[i].lastname;
    //    alert(fname+lname);
       
       
       const dataDiv = document.getElementById("dataShow");
    //    const list = document.createElement("p");
       var list = document.createTextNode( ` Hello ${fname} ${lname} how are you `);
       const space=document.createElement("br");
    //    list.innerText = ` Hello ${fname} ${lname} how are you `;
       dataDiv.appendChild(list);
       dataDiv.appendChild(space);

    }

}

function copyDetails() {
    
    const text = document.getElementById("dataShow").innerText; 
    text.select; 
    navigator.clipboard.writeText(text); 
    alert("copy data clicked");
}

document.getElementById("showdata").addEventListener("click",getDetails);

document.getElementById("copydata").addEventListener("click",copyDetails);