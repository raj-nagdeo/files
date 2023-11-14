

    var dataTable =  document.getElementById("datatable");  
    

function row() {
        var rowLength = dataTable.rows.length;  
    var r = dataTable.insertRow(rowLength);  
    var c1 = r.insertCell(0);  
    var c2 = r.insertCell(1);  
    var c3 = r.insertCell(2);  
    var c4 = r.insertCell(3);  

    var compositeName = document.createElement("input");
    compositeName.setAttribute("type", "text");
    compositeName.setAttribute("placeholder","Composite Name");

    var revision = document.createElement("input");
    revision.setAttribute("type", "text");
    revision.setAttribute("placeholder","Revision");

    var partitionName = document.createElement("input");
    partitionName.setAttribute("type", "text");
    partitionName.setAttribute("placeholder","Partition Name");

    var checkbox = document.createElement("input");  
    checkbox.setAttribute("type","checkbox");

    c1.appendChild(checkbox);  
    c2.appendChild(compositeName);  
    c3.appendChild(revision);  
    c4.appendChild(partitionName);
}

function getData() {  
    var rowLength = dataTable.rows.length;  
    var dataArray = [];
for (i = 0; i < rowLength; i++){

    
   
   const compositeName = dataTable.rows[i].cells[1].children[0].value;
   const revision = dataTable.rows[i].cells[2].children[0].value;
   const partitionName = dataTable.rows[i].cells[3].children[0].value;

   
    var nameData ={"compositename":compositeName,"reVision":revision,"partitionname":partitionName};
    dataArray.push(nameData);
   
    

    }
    window.sessionStorage.setItem("items", JSON.stringify(dataArray));
}

function getDetails() {
    // alert("show data button clicked");
    var dataArray = JSON.parse(sessionStorage.getItem("items"));
    console.log(dataArray);
    for (let i = 0; i < dataArray.length; i++) {
       const cname=dataArray[i].compositename;
       const riname=dataArray[i].reVision;
       const pname=dataArray[i].partitionname;
    //    alert(fname+lname);
       
       
       const dataDiv = document.getElementById("dataShow");
       const dataDiv2=document.getElementById("dataShow2");
    //    const list = document.createElement("p");
       var list1 = document.createTextNode( `sca_activateComposite(<Host>,<port>,<user>,<password>,'${cname}','${riname}',partition='${pname}')`);
       var list2 = document.createTextNode( `sca_retireComposite(<Host>,<port>,<user>,<password>,'${cname}','${riname}',partition='${pname}')`);
       const space1=document.createElement("br");
       const space2=document.createElement("br");
       
    //    list.innerText = ` Hello ${fname} ${lname} how are you `;
       dataDiv.appendChild(list1);
       dataDiv.appendChild(space1);
       dataDiv2.appendChild(list2);
       dataDiv2.appendChild(space2);

    }

}

function copyDetails() {
    
    const text = document.getElementById("dataShow").innerText; 
    text.select; 
    navigator.clipboard.writeText(text); 
    // alert("copy data clicked");
}

function copyDetails2() {
    
    const text = document.getElementById("dataShow2").innerText; 
    text.select; 
    navigator.clipboard.writeText(text); 
    // alert("copy data clicked");
}


function del()  
{  
    
     var rowLength = dataTable.rows.length;  
    for(var i = rowLength - 1; i > 0; i--)  
    {  
        if(dataTable.rows[i].cells[0].children[0].checked)  
        {  
            dataTable.deleteRow(i);  
        }  
    }  
    // alert("delete clicked");
}  

document.getElementById("showdata").addEventListener("click",getDetails);

document.getElementById("copyRetiredata").addEventListener("click",copyDetails2);

document.getElementById("copydata").addEventListener("click",copyDetails);