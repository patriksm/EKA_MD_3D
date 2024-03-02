var world = document.getElementById("world");
var container = document.getElementById("container");

var velocity = 5;
var forward = 0;
var backward = 0;
var left = 0;
var right = 0;
var mouseX = 0;
var mouseY = 0;
var lock = false;

var map = [
            [0,100,0,90,0,0,2000,2000,"#555555"],
            [0,0,-1000,0,0,0,2000,200,"#FF0000"],//prieksaa siena
            [0,0,1000,0,0,0,2000,200,"#FF0000"], // siena aizmugure
            [1000,0,0,0,90,0,2000,200,"#FFFF00"],//laba siena
            [-1000,0,0,0,90,0,2000,200,"#FF00FF"]
];

function player(x, y, z, rx, ry){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

var pawn = new player(0, 0, 0, 0, 0);

function update(){
    let dx = left - right;
    //pawn.y = up - down;
    let dz = forward - backward;
    let drx = mouseY;
    let dry = - mouseX;

    mouseX = mouseY = 0;

    pawn.x += dx;
    pawn.z += dz;

    if (lock) {
        pawn.rx += drx;
        pawn.ry += dry;
    }
    
    world.style.transform = `translateZ(600px) translate3d(${pawn.x}px, 0px, ${pawn.z}px) rotateX(${-pawn.rx}deg) rotateY(${-pawn.ry}deg) rotateZ(0deg)`;
}

function createWorld(){
    for(let i = 0; i < map.length; i++){
        let newElement = document.createElement("div");
        newElement.className = "square";
        newElement.id = "square" + i;
        newElement.style.width = `${map[i][6]}px`;
        newElement.style.height = `${map[i][7]}px`;
        newElement.style.background = map[i][8];
        newElement.style.transform = 
        `translate3d(${600-map[i][6]/2 + map[i][0]}px, 
                     ${400-map[i][7]/2 + map[i][1]}px, 
                     ${map[i][2]}px) 

        rotateX(${map[i][3]}deg) 
        rotateY(${map[i][4]}deg) 
        rotateZ(${map[i][5]}deg)`;
    
        world.append(newElement);
    }
}

createWorld();

timerGame = setInterval(update, 10)