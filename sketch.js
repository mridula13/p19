var banana, bananaImage, stone, stoneImage, monkey, monkeyImage, back, score, img

var stoneGroup, bananaGroup

var ground


var score

function preload()
{
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  stoneImage = loadImage("stone.png");
  
  img = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(800, 400);
  
  back = createSprite(0,200,800,400);
  back.addImage(img);
  back.scale = 1;
  
  
  monkey = createSprite(100,380,0,0);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1;
  
  ground = createSprite(400,380,800,10);
  ground.visible = false;
  
 
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  score = 0
  
}

function draw() 
{
  background(220);
   
  back.velocityX = -5;
  
 monkey.collide(ground);
  
 if(keyDown("space") && monkey.y >= 314.3)
  {
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(back.x <= 100)
   {
     back.x = back.width/2;
   } 
  
 if(monkey.isTouching(bananaGroup))
   {
     score = score + 2;
     bananaGroup.destroyEach();
   }
  
//   if(score % 10 == 0 && score > 1)
//     {
//     monkey.scale = monkey.scale + 0.1;
//     }
  
   switch(score)
   {
        case 10: monkey.scale = 0.12;
                break;
        case 20: monkey.scale = 0.14;
                break;
        case 30: monkey.scale = 0.16;
                break;
        case 40: monkey.scale = 0.18;
                break;
        case 50: monkey.scale = 0.2;
   }
  
  if(monkey.isTouching(stoneGroup))
    {
      monkey.scale = 0.1;
    }
  
  food();
  stones();
  
  //console.log(monkey.y);
  drawSprites();
  
  textSize(30);
  stroke("black");
  fill("black");
  text("Score: " + score, 350,50);
}

function food ()
{
  if(frameCount % 150 == 0)
    {
     var r 
     r = random(150,300);
     banana = createSprite(800,r,0,0);
     banana.velocityX = -5; 
     banana.addImage(bananaImage); 
     banana.scale = 0.1;
     bananaGroup.add(banana);
     bananaGroup.setLifetimeEach = 300; 
     monkey.depth = banana.depth + 1;
    }
}

function stones()
{
  if(frameCount % 200 == 0)
  {
    stone = createSprite(800,350,0,0);
    stone.addImage(stoneImage);
    stone.scale = 0.2;
    stone.velocityX = -5;
    stoneGroup.add(stone);
    stoneGroup.setLifetimeEach = 300;
  }
}