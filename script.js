var a=["Ahmad","Zohaib","Asif","Sawat","Murree"];

var b=a.indexOf("Asif");

document.write(b);

var c=a.lastIndexOf("Murree");

document.write("<br>"+ c);

var d=a.indexOf("Aman");

document.write("<br>"+ d);

var aa=a.includes("Asif");

document.write("<br>"+ aa);

var ages=[27,11,9,12,19];

var ds=ages.some(checkAdult);

document.write("<br>"+ ds);

function checkAdult(age){
    return age>=18;
}

var bs=ages.every(checkAdult);

document.write("<br>"+ bs);

var dd=ages.find(checkAdult);

document.write("<br>"+ dd);

var da=ages.findIndex(checkAdult);

document.write("<br>"+ da);

var f=ages.filter(checkAdult);

document.write("<br>"+ f);