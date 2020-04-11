const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-110);
    engine = Engine.create();
    world = engine.world;
    for(var i=1;i>0;i=+10){
        drop = new Drops(i,10); 
    }
}

function draw(){
    background("white");
    Engine.update(engine);
    
   
    drop.display();
}
