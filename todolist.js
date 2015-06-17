var r = Math.floor( (Math.random()*256) ),
    g = Math.floor( (Math.random()*256) ),
    b = Math.floor( (Math.random()*256) );
var colorHex = "#"+r.toString(16)+g.toString(16)+b.toString(16);
document.body.style.backgroundColor = colorHex;

function getValue(){
    var x=document.getElementById("myHeader");
    var node = document.createElement("LI");
    var n = prompt("Add something~");
    node.className = "list";
    node.innerHTML = n;
    document.getElementById("myList").appendChild(node);
    var c = document.getElementById("checkbox").cloneNode(true);
    document.getElementById("hehe").appendChild(c);
}

