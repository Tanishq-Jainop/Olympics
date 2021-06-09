var canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
    var color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

var color="yellow"

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(295,260,40,0,2*Math.PI);
ctx.stroke();

var color="black"

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(340,210,40,0,2*Math.PI);
ctx.stroke();

var color="green"

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(395,260,40,0,2*Math.PI);
ctx.stroke();

var color="red"

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(435,210,40,0,2*Math.PI);
ctx.stroke();