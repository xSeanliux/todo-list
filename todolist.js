

//Making the background color start
var r = Math.floor( (Math.random()*256) ),
    g = Math.floor( (Math.random()*256) ),
    b = Math.floor( (Math.random()*256) );
var colorHex = "rgb("+r+","+g+","+b+")";

document.body.style.backgroundColor = colorHex;

//background color end. 


var funcCalled = 0

function getValue(){
    var x=document.getElementById("myHeader");
    var node = document.createElement("LI");
    var n = prompt("Add something~");
    node.className = "list";
    node.id = "item";
    node.innerHTML = n;
    document.getElementById("myList").appendChild(node);
    var c = document.getElementById("checkbox").cloneNode(true);
    funcCalled = funcCalled++;

   
}


function deleteObject(){

    $("#myList #item").remove();

      

    
}


