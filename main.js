function preload(){
}
function setup(){
canvas=createCanvas(640,480);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide()
}

function draw(){
    image(video,230,150,220,200)
    fill(255,0,0);
    stroke(255,0,0);
    circle(200,160,80);
    circle(465, 160,  80);
    circle(200,365,80);
    circle(465,365,80);
};
