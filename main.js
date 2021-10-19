nosex=0;
nosey=0;

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function take_snapshot()
{
    save('MyFilterImage.png');
}

function draw()
{
image(video,0,0,300,300);
image(lips,nosex,nosey,30,20);
}

function modelLoaded()
{
    console.log('Model has been Loaded');
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y+14;
        console.log("nose x="+nosex);
        console.log("nose y="+nosey);
    }
}
function preload()
{
    lips=loadImage('https://i.postimg.cc/Zq1n2Hs6/Lips-image-png.png');
}