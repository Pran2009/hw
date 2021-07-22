color = "black";
canvas=document.getElementById("can");
ctx= canvas.getContext("2d");
var x_last,y_last;
width=5;
screenW=screen.width;
canW=screen.width-70;
canH=screen.height-300;
function clr() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

if (screenW<992) {
    document.getElementById("canv").width=canW;
    document.getElementById("canv").height=canH;
}
canvas.addEventListener("touchstart",ts);
function ts(e){
    color = document.getElementById("c").value;
    width = document.getElementById("w").value;
    x_last=e.touches[0].clientX-canvas.offsetLeft;
    y_last=e.touches[0].clientY-canvas.offsetTop;

}
canvas.addEventListener("touchmove",tm);
function tm(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(x_last,y_last);
        ctx.lineTo(currentx,currenty);
        ctx.stroke()

    x_last=currentx;
    y_last=currenty;

}
canvas.addEventListener("mouseup",mu);
function mu(e){
    m_event= "mouseup"; 
}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    m_event= "mouseleave"; 
}

