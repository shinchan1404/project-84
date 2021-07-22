

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car_1.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image ="car_2.jpg";
car2_x = 10;
car2_y = 100;

background_image = "background.jpg";

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;   

	car1_imgTag = new Image(); 
	car1_imgTag.onload = uploadcar1; 
	car1_imgTag.src = car1_image;   

	car2_imgTag = new Image(); 
	car2_imgTag.onload = uploadcar2; 
	car2_imgTag.src = car2_image;   
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown)
function my_keydown(){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
    }
    if(keyPressed=='40')
    {
        down()
    }
    if(keyPressed=='37')
    {
        left()
    }
    if(keyPressed=='39')
    {
        right()
    }
    if(keyPressed=='87')
    {
        www()
    }
    if(keyPressed=='83')
    {
        sss()
    }
    if(keyPressed=='65')
    {
        aaa()
    }
    if(keyPressed=='68')
    {
        ddd()
    }
}
