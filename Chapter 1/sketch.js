let velocity;
let acceleration;
let position;

function setup() {

    velocity = new PVector(1,0);
    position = new PVector(width/2, height/2);

    createCanvas(1000, 500);
    background(255);
}

function draw() {

    background(255);
    stroke(50,205,50);
    strokeWeight(4);
    rect(0,0,width,height);

    fill(50,205,50);
    ellipse(width/2, height/2, 150, 150);

    position.add(velocity);
if(!mouseIsPressed){
    acceleration = new PVector(mouseX, mouseY);
    acceleration.sub(position);
    acceleration.setMag(0.98);

    velocity.add(acceleration);
    velocity.limit(15);
}
    stroke(255, 204, 0);
    strokeWeight(4);
    fill(200);
    ellipse(position.x, position.y, 30, 30);

}