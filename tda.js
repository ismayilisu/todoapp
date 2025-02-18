const input=document.querySelector("input");
const list=document.querySelector("ul");
const butt=document.querySelector("button");
butt.addEventListener("click",(event)=>{
    if (input.value == ""){
        window.alert("Please enter a Task");
        return;


    }
    let lii=document.createElement("li");
    lii.innerHTML=input.value;
    list.appendChild(lii);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    lii.appendChild(span);
    input.value="";
    
})
document.querySelector("ul").addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");}
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    
},false)