function add() {
    document.getElementById("result").innerHTML = Number(document.getElementById('fnum').value) + Number(document.getElementById('snum').value);
}
function sub() {
    document.getElementById("result").innerHTML = Number(document.getElementById('fnum').value) - Number(document.getElementById('snum').value);
}
function mul() {
    document.getElementById("result").innerHTML = Number(document.getElementById('fnum').value) * Number(document.getElementById('snum').value);
}
function div() {
    document.getElementById("result").innerHTML = Number(document.getElementById('fnum').value) / Number(document.getElementById('snum').value);
}
function mod() {
    document.getElementById("result").innerHTML = Number(document.getElementById('fnum').value) % Number(document.getElementById('snum').value);
}
function mod() {
    document.getElementById("result").innerHTML = Number(document.getElementById('fnum').value) % Number(document.getElementById('snum').value);
}

function tab(){
    var num=Number(document.getElementById('num').value);
    let str="";
    let strtab="";
    for(var i=1;i<11;i++){
        
       str=num+" ✕ "+i+" = "+(num*i)+"</br>";
       strtab=strtab+str;
       
    }
    document.getElementById("tresult").innerHTML=strtab;
}


function USd() {
    document.getElementById("cresult").innerHTML = Number(document.getElementById('cur').value) *0.01213;
}
function Euro() {
    document.getElementById("cresult").innerHTML = Number(document.getElementById('cur').value) *0.01323;
}
function Bpound() {
    document.getElementById("cresult").innerHTML = Number(document.getElementById('cur').value) *0.01087;
}
function Yen() {
    document.getElementById("cresult").innerHTML = Number(document.getElementById('cur').value) *1.42;
}