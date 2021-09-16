canvas =document.getElementById("canvas");
ctx= canvas.getContext("2d");

color = "blue";
width=5;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(250, 210, 40, 0, 2 * Math.PI)
ctx.stroke();

color = "black";
width=5;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(350, 210, 40, 0, 2 * Math.PI)
ctx.stroke();

color = "red";
width=5;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(450, 210, 40, 0, 2 * Math.PI)
ctx.stroke();

color = "yellow";
width=5;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(300, 260, 40, 0, 2 * Math.PI)
ctx.stroke();

color = "green";
width=5;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(400, 260, 40, 0, 2 * Math.PI)
ctx.stroke();