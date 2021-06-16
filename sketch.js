//Create variables here
var dog,dog1,dog2,foodStock,foodS;
function preload()
{
	dog1 = loadImage("dogImg.png");
  dog2 = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();

  dog=createSprite(250,250);
  dog.addImage(dog1);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background("green");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
}
text("press UP ARROW KEY",250,50)
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x

  })
}

