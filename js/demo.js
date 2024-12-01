let elem = document.getElementById("variableheading");


elem.innerHTML="";


let para = "Coming Soon. Stay tuned :)";


let integer = 100;
let checker = true;
let index =0;
function addText(){
elem.innerHTML+=para[index];
index++;
if(index==para.length){index=0;checker=false;clearInterval(interval)}
console.log(para.length);
}
let interval = setInterval(addText,77);
