class food{

constructor(){

this.image = loadImage("images/Milk.png");
this.foodstock = 0;
this.lastFed;

}

getFoodStock(){

return this.foodstock;

}

updateFoodStock(foodstock){

this.foodstock = foodstock;

}

deductFood(){

if(this.foodstock>0){ 

this.foodstock = foodstock-1;

}
}

getFedTime(lastFed){

this.lastFed = lastFed; 

}

display(){

    textSize(15);
    if(lastFed>=12){
    
    text("Last Fed :"+lastFed%12 + "PM",350,30);
    
    }
    else if(lastFed==0){
    
    text("Last Fed : 12 AM",350,30);
    
    }
    
    else{
    
    text("Last Fed :"+lastFed+"AM",350,30);
    
    }

var x=80,y=100;

imageMode(CENTER);

if(this.foodstock!==0){

for(var t=0;t<this.foodstock;t++){

if(t%10==0){

x=80;
y=y+50;

}

image(this.image,x,y,50,50);
x=x+30;

}

}

}


}