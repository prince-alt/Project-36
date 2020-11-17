//Create variables here
var database,dog,happydog,pet,foodstock,foods;
var feed,addfood;
var fedTime,lastFed;
var foodObj;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");


}

function setup() {
  createCanvas(800, 500);

  database = firebase.database();

  pet = createSprite(250,350,50,50);
  pet.addImage(dog);
  pet.scale = 0.2;

  foodstock = database.ref('food');
  foodstock.on("value",readStock);
  
  foodObj = new food();

  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  
  addfood = createButton("Add Food")
  addfood.position(800,95);
  addfood.mousePressed(addFoods);

}


function draw() {  

  background("teal");

    foodObj.display();

  drawSprites();
  //add styles here

textSize(30);
fill ("red");
text("Food :"+foods,50,50);


fedTime = database.ref('feedtime');
fedTime.on("value",function(data){

lastFed=data.val();1

})

}

function readStock(data){

foods = data.val();
foodObj.updateFoodStock(foods);

}



function feedDog(){

pet.addImage(happydog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1);

database.ref('/').update({

food : foodObj.getFoodStock()

})

}

function addFoods(){

  

foods++;
database.ref('/').update({

food : foods

})

}




