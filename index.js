

document.querySelector(".a>input").addEventListener("input",function(){
    var ctemp=parseFloat(document.querySelector(".a>input").value);
    var ftemp=(ctemp*1.8)+32;
    document.querySelector(".b>input").value=ftemp;
});
document.querySelector(".b>input").addEventListener("input",function(){
    var ftemp=parseFloat(document.querySelector(".b>input").value);
    
    var ctemp=(ftemp-32)*(5/9);
    document.querySelector(".a>input").value=ctemp;
});