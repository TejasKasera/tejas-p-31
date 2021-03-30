var smoke1;
var plate;
var outline1;
var outline2;
var outline3;
var outline4;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(600,650);
    engine = Engine.create();
    world = engine.world;

    outline1 = new Outline(300,645,760,10);
    
    outline2 = new Outline(300,5,760,10);
   
    outline3 = new Outline(5,645,10,1400);
   
    outline4 = new Outline(595,645,10,1400);

   


  }

function draw(){
    background("black");
    Engine.update(engine); 
    outline1.display();
    outline2.display();
    outline3.display();
    outline4.display();
    drawSprite();
}