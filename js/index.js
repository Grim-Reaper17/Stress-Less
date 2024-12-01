let elem = document.getElementById("moving");
elem.innerHTML="";
let para = "Don't let yourself fade. We're rooting for you. #StressLess";
let integer = 100;
let checker = true;
let index =0;

setInterval(()=>{
if(checker){
elem.innerHTML+=para[index];
index++;
if(index==para.length){index=0;checker=false;}
}
else{
elem.style.opacity = `${integer}%`;
integer-=10;
if(integer<0){checker=true;elem.style.opacity="100%";elem.innerHTML='';integer=100}
}


},100)
