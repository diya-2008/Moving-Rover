c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d");
imgs=["img 3.jpg","img 4.jpg","img 5.jpg","img 6.jpg"];
x=Math.floor(Math.random()*4);
rimg="rover.png";
bg=imgs[x];
console.log("bgimage=" + bg);
rwidth=100;
rheight=100;
roverx=10;
rovery=10;
function add(){
bgimg=new Image();
bgimg.onload=uploadbg;
bgimg.src=bg;

Rimg=new Image();
Rimg.onload=uploadr;
Rimg.src=rimg;
}
function uploadbg(){
ctx.drawImage(bgimg,0,0,c1.width,c1.height);
}
function uploadr(){
ctx.drawImage(Rimg,roverx,rovery,rwidth,rheight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
if (keypress=='38'){
up();
console.log("up");
}
if (keypress=='40'){
    down();
    console.log("down");
    }
if (keypress=='37'){
    left();
    console.log("left");
    }
if (keypress=='39'){
    right();
    console.log("right");
    }
}
function up(){
if(rovery>=0){
rovery=rovery-20;
uploadbg();
uploadr();
}
}
function down(){
if(rovery<=500){
rovery=rovery+20;
uploadbg();
uploadr();
}
}
function left(){
if(roverx>=0){
    roverx=roverx-20;
    uploadbg();
    uploadr();
}
}
function right(){
if (roverx<=800){
    roverx=roverx+20;
    uploadbg();
    uploadr();
}


}