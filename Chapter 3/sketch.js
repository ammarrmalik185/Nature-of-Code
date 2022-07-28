let angularVelocity;
let angularAcceleration;
let angle;
let anchor;
let length;
let amplifier;
let retardation;

function setup() {
    angleMode(DEGREES);
    createCanvas(700,400);
    angle = -45;
    anchor = new PVector(width/2, 0);
    length = 100;
    angularVelocity = 0;
    angularAcceleration = 0;
    amplifier = 1/10;
    retardation = 0.9994;

}

function draw() {

    background(150);
    push();
        translate(anchor.x, anchor.y);
        rotate(angle);
        line(0, 0, 0, length);
        circle(0, length, 50);
    pop();

    push();
        translate(anchor.x, anchor.y);
        rotate(-45);
        line(0, 0, 0, length);
    pop();

    angularAcceleration = -(angle/length) * amplifier;

    angle += angularVelocity;
    angularVelocity += angularAcceleration;
    angularVelocity *= retardation;
    // angularVelocity.limit(5);


}