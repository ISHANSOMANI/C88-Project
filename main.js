
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 80;
block_height = 80;

var player_object = "";
var block_object = "";

function player_updated()
{
    fabric.Image.fromURL("Robin.jpg",function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
    });
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
block_object = Img;

block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({
top:player_y,
left:player_x
});

canvas.add(block_object);
});

}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){

keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == "80")
{
    console.log("p and shift press together");
    block_width = block_width + 10 ;
block_height = block_height +10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
}
if(e.shiftKey == true && keyPressed == "77")
{
    console.log("m and shift press together");
    block_width = block_width - 10 ;
block_height = block_height - 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height; 
}
if(keyPressed == "38")
{
    up();
    console.log("up");
}

if(keyPressed == "37")
{
    left();
    console.log("left");

}
if(keyPressed == "39")
{

    right();
    console.log("right");
}
if(keyPressed == "40")
{
    down();
    console.log("down");
}

if(keyPressed == "65")
{
    new_image("hulk_legs.png");
    console.log("A is pressed");
}
if(keyPressed == "66")
{
    new_image("captain_america_left_hand.png");
    console.log("B is pressed");
}
if(keyPressed == "67")
{
    new_image("hulk_left_hand.png");
    console.log("C is pressed");
}
if(keyPressed == "68")
{
    new_image("hulkd_body.png");
    console.log("D is pressed");
}
if(keyPressed == "69")
{
    new_image("thor_face.png");
    console.log("E is pressed");
}
if(keyPressed == "70")
{
    new_image("thor_right_hand.png");
    console.log("F is pressed");
}
if(keyPressed == "71")
{
    new_image("spiderman_body.png");
    console.log("G is pressed");
}
if(keyPressed == "72")
{
    new_image("spiderman_face.png");
    console.log("H is pressed");
}
if(keyPressed == "73")
{
    new_image("spiderman_left_hand.png");
    console.log("I is pressed");
}
if(keyPressed == "74")
{
    new_image("spiderman_right_hand.png");
    console.log("J is pressed");
}
if(keyPressed == "75")
{
    new_image("spiderman_legs.png");
    console.log("K is pressed");
}
if(keyPressed == "76")
{
    new_image("ironman_body.png");
    console.log("L is pressed");
}
if(keyPressed == "77")
{
    new_image("ironman_face.png");
    console.log("M is pressed");
}
if(keyPressed == "78")
{
    new_image("ironman_left_hand.png");
    console.log("N is pressed");
}
if(keyPressed == "79")
{
    new_image("ironman_right_hand.png");
    console.log("O is pressed");
}
if(keyPressed == "81")
{
    new_image("captian_america_left.png");
    console.log("Q is pressed");
}
}

function up()
{
if(player_y > 0)
{
player_y = player_y - block_height;
console.log("Block_height = "+ block_height);
console.log("when up pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}


function down()
{
if(player_y <= 500)
{
player_y = player_y + block_height;
console.log("Block_height = "+ block_height);
console.log("when down pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}

function left()
{
if(player_x > 0)
{
player_x = player_x - block_width;
console.log("Block_height = "+ block_width);
console.log("when left pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}

function right()
{
if(player_x <= 850)
{
player_x = player_x + block_width;
console.log("Block_height = "+ block_width);
console.log("when right pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}


