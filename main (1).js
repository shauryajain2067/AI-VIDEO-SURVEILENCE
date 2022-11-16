video="";
status="";
objects=[];
function preload(){
video=createVideo("video.mp4");

}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}


function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    
}

function draw(){
    image(video,0,0,480,380);
    if(status != ""){
objectDetector.detect(video,gotResults);
    }
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    video.speed(1);
    video.volume(0);
}

function gotResults(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
    }
}
