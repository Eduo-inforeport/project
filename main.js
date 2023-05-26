canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var colour="black";
var line=2;
var last_positionofX, last_positionofY;

var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    console.log("touchstart");
    colour=document.getElementById("colour").value;
   line=document.getElementById("line-width").value;

   last_positionofX=e.touches[0].clientX-canvas.offsetLeft;
   last_positionofY=e.touches[0].clientY-canvas.offsetTop;
}



canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    current_position_mousex=e.touches[0].clientX-canvas.offsetLeft;
    current_position_mousey=e.touches[0].clientY-canvas.offsetTop;

    console.log(" current_position_mousex="+ current_position_mousex+",  current_position_mousey="+ current_position_mousey);

   
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=line;

        ctx.moveTo(last_positionofX, last_positionofY);
        ctx.lineTo(current_position_mousex,current_position_mousey);
        
        ctx.stroke();
    
    last_positionofX=current_position_mousex;
    last_positionofY=current_position_mousey;

}


function ClearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
