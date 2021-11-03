song="";
leftWristX =0;
leftWristY =0;
rightWristX=0;
rightWristY=0;

console.log("now will this work plz!");
function preload(){
    song = loadSound("Song1.mp3");
    console.log("REALLY IS THIS WORKING!!!?!??!?!?!?");
}
    
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    console.log("is this workin!!?!?!?!!?!?");

    posenet = ml5.posenet("poseNet", modelLoaded);
    posenet.on("on",gotPoses);
}
    
function draw(){
    image(video,0,0,600,500);
}
    
function play(){
    song.play();
    console.log("did dis play?");
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("the pose net has started")
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("the left wrist X is "+leftWristX+" and the Y is "+leftWristY+".")

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.Y;
console.log("the right wrist X is "+rightWristX+" and the Y is "+rightWristY+".")
}
}