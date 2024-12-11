window.onload = function(){
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");


var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;


var mf = 300;
var flakes = [];


for(var i = 0; i < mf; i++)
{
    flakes.push({
        x: Math.random()*W,
        y: Math.random()*H,
        r: Math.random()*5+2,
        d:Math.random() + 1
    })
}

function drawFlakes()
{
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(var i = 0; i < mf; i++)
    {
        var f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
     ctx.font = "bold 36px serif";
     ctx.fillStyle = "gold";
     ctx.textAlign = "center";

     const message = "Wishing you a Merry Chrismas and a Joyful New Year!";
     const subMessage ="May your holidays be filled with peace, love and happiness.";

     ctx.fillText(message, W / 2, H / 2 - 20);

     ctx.font = "28px serif";
     ctx.fillStyle = "white";
     ctx.fillText(subMessage, W / 2, H / 2 + 30);
    moveFlakes();
}

var angle = 0;

function moveFlakes(){
    angle += 0.01;
    for(var i = 0; i < mf; i++)
    {
        var f = flakes[i];

        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 2;

        if(f.y > H){
            flakes[i] ={x: Math.random()*W, y:0, r: f.r, d: f.d};
        }
    }
}

setInterval(drawFlakes,25);


}