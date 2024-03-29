var starImg,bgImg;
var star, starBody;
//variable for fairy sprite and fairyImg
var fairy,fairyimg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyimg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairySound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(700,650);

	//code to play fairyVoice sound
	fairySound.play();
	//creating fairy sprite and adding animation for fairy
	fairy = createSprite(100,500,500,20);
	fairy.addAnimation("flyingfairy",fairyimg);
	fairy.scale = 0.3;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//code to move fairy left and right

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x +100;
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 100;
	}
}
