canvas = document.getElementById("myCanvas");
color = "blue";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 100 ,40 , 0,  2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clienty - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y)

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y, 40 ,0 ,2*Math.PI);
    ctx.stroke();
}

canvas = document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 250 ,40 , 0,  2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clienty - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y)

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y, 50 ,45 ,2*Math.PI);
    ctx.stroke();
}


canvas = document.getElementById("myCanvas");
color = "yellow";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 250 ,40 , 0,  2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clienty - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y)

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y, 50 ,45 ,2*Math.PI);
    ctx.stroke();
}

canvas = document.getElementById("myCanvas");
color = "black";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 300 ,40 , 0,  2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clienty - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y)

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y, 50 ,45 ,2*Math.PI);
    ctx.stroke();
}

canvas = document.getElementById("myCanvas");
color = "green";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 370 ,40 , 0,  2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clienty - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y)

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y, 50 ,45 ,2*Math.PI);
    ctx.stroke();
}

canvas = document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 430 ,40 , 0,  2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clienty - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y)

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y, 50 ,45 ,2*Math.PI);
    ctx.stroke();
}








