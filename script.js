var canvas = document.getElementById("ticket-container");
var ctx = canvas.getContext("2d");

// dims and measurement

tdim_width = 350;
tdim_height= 250;



function getData(url)
{
  var data = fetch(url).then((result)=>{
    console.log(result);
  }).catch((err)=>{
    console.log(err);
  })
  return data;
}


function generateTicket()
{
  
  //ctx.font = "48px serif";
  //ctx.fillText("Hello world", 10, 50);
  
  //alert("sorry mam, under maintenance!");
ctx.clearRect(0,0,canvas.width,canvas.height);
var confirmation=window.confirm("Sure to buy the ticket?");

ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "brown";
ctx.rect(5, 5, tdim_width, tdim_height);
ctx.stroke();

ctx.fillStyle = "brown";
ctx.fillRect(5,5,tdim_width/2,tdim_height/8);

ctx.beginPath();
ctx.moveTo(5,tdim_height/7);
ctx.lineTo(tdim_width+5,tdim_height/7);

// Draw the Path
ctx.stroke();



ctx.font="bolder 13px arial";
ctx.fillStyle = "white";
ctx.fillText("शुभ यात्रा",40,15);
ctx.fillText("HAPPY JOURNEY",20,30);

var logo_top = new Image();
logo_top.src="https://qph.cf2.quoracdn.net/main-qimg-d3a37d54d57b63a39d3a29f8cc3ab80f";

logo_top.addEventListener("load",(event)=>{
  ctx.drawImage(logo_top,140,5,30,30);
})
ctx.font="22px arial";
ctx.fillStyle="brown";
ctx.fillText("G",185,30);

ctx.letterSpacing = "3px";
ctx.font="bold 14px arial";
ctx.fillStyle="brown";
ctx.fillText(getr(4),215,28);
ctx.font="bold 22px arial";
ctx.fillText(getr(4),260,24);



// printing the date 

var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

var today= day+"/"+month+"/"+year;

ctx.letterSpacing="0px";
ctx.fillStyle="black";
ctx.font="bold 15px arial";
ctx.fillText("ATVM TICKET",100,60);
ctx.fillText(today,280,60);

// next line

ctx.fillStyle="black";
ctx.font="bold 12px arial";
ctx.fillText("Rs. 65/-",10,80);
ctx.fillText("JOURNEY     एकल",80,80);
ctx.fillText(getr(4),315,80);

// uts no line
ctx.font = "bold 12px arial";
ctx.fillText("UTS NO : SHE"+getr(10), 10, 100);


// hindi from - to

ctx.font = "14px arial";
//ctx.fillText("HINDI-LANGUAGE", 10, 120);
var from_to = document.getElementById("from").value+" to "+document.getElementById("to").value;

ctx.fillText(from_to, 10, 142);

var ttype="";
var type = document.getElementById("type").value;
if(type=="me"){
  ttype="MAIL/EXP.";
}else if(type=="ord"){
  ttype="ORD.";
}else if(ttype=="sf"){
  ttype="SUPERFAST";
}

ctx.font = "bold 14px arial";
ctx.fillText("II "+ttype, 250, 140);


var dist = document.getElementById("dist").value;

ctx.fillText("Via ...", 10, 160);
ctx.fillText("KM "+dist,245,159);

var adult = document.getElementById("adults").value;
var child = document.getElementById("children").value;
ctx.fillText("AD : "+adult,10,180);
ctx.fillText("CH : "+child,70,180);

var fare = document.getElementById("fare").value;
ctx.fillText("Rs. "+fare+"/-",125,180);

ctx.font = "10px monospace";
ctx.fillText("Commence journey within 3 hrs. or Dep. of first train",10,200);

ctx.font = "bold 12px arial";
ctx.fillText("SAC :"+getr(6),10,220);
ctx.fillText("IR : "+getr(12),100,220);
ctx.fillText("MODE : CARD",270,220);


ctx.font = "bold 12px arial";
ctx.fillText("R2 773",10,240);
ctx.fillText(today+" 11:01",80,240);
ctx.fillText("VKT1",250,240);

ctx.save();
 ctx.translate(0, 150);
 ctx.rotate(-Math.PI/2);
 ctx.textAlign = "center";
 ctx.fillStyle="brown";
 ctx.fillText("EASTERN RAILWAY", 5, 5);
 ctx.restore();
 
  document.getElementById("load").style.display="block";
  setTimeout(function(){
    document.getElementById("cdiv").style.display="block";
    document.getElementById("load").style.display="none";
  },2000);
  
  
}

var download = function(){
  var link = document.getElementById("download");
  link.download = 'ticket.png';
  link.href = document.getElementById('ticket-container').toDataURL();
}
download();

function msg()
{
  alert("There are a few missing details in the ticket generated.\nGenerated ticket must not be print for travel purpose.\nYou might get fined heavily for forgery.\nThis app is just for recreational purpose.\n");
}
function getr(arg) {
  return Math.floor(Math.random()*(10**arg));
}
function cupfare(){
  var fare=0;
  var sfcharges=0;
  var num = document.getElementById("dist").value;
fare=num*0.30;
var type = document.getElementById("type").value;
if(type=="me"){
  fare+=15;
}else if(type=="ord"){
  fare+=0;
}else if(type=="sf"){
  fare+=15;
}
var person=document.getElementById("adults").value;
fare+=fare*person;
document.getElementById("fare").value=fare;

}