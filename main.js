function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(600,300);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model loaded!');
}

function draw() {
	background(#D3D3D3);
	  if(noseX < 300)
	  {
		  pingpongX = pingpongX - 1;
	  }
	  if(noseX > 300)
		{
			pingpongX = pingpongX + 1;
		}
		if(noseY > 300)
		{
			pingpongY = pingpongY - 1;
		}
		if(noseY > 300)
		{
			pingpongY = pingpongY + 1;
		}

	  image(img,pingpongX,pingpongY, 40,70);
}






