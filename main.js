noseX=0;
noseY=0;
clownNose="";

function preload(){
    clownNose= loadImage("clownnose.png");
}

function setup (){
    canvas= createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet= ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotResults);
}

function gotResults(result)
{ if(result.length>0){
    console.log(result);
    console.log("nose x is=" + result[0].pose.nose.x);
    console.log("nose y is=" + result[0].pose.nose.y);
    noseX= result[0].pose.nose.x;
    noseY= result[0].pose.nose.y;
}
}

function modelLoaded(){
    console.log("posnet is loaded")
}



function draw (){
    image(video,0,0,250,250);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,30);
    image(clownNose,noseX,noseY,30,30)

}

function take_snapshot(){
    save("snapshot.png")
}

