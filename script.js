var world = document.getElementById("world");

var map = [
            [0,100,0,90,0,0,2000,2000,"#000"],
            
];

function update(){

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