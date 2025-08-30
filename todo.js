let btn=document.getElementById("btn");
let box1=document.querySelector("#one");
let box2=document.querySelector("#two");
let tf=document.querySelector("#tf");


btn.addEventListener("click",function(){
    let tvalue = tf.value;
    if(tvalue!==""){
let newtag=document.createElement("li");
let text=document.createTextNode(tvalue);
newtag.appendChild(text);
box2.firstElementChild.appendChild(newtag);
newtag.setAttribute("id","list");
tf.value="";

    }
    else{
        alert("Enter Something!");
    }
})