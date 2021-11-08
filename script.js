var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var snake = new Image();// создаем объект
var apple = new Image();


var goUp = false; //вниз ли ползет змея

var snakeX = 0;
var snakeY = 0;


var score = 0;// счет, если набрал 1 то уже хорошо

var appleX = 60;
var appleY = 60;

snake.src = "img/snake.png"; // Указание нужного изображения
apple.src = "img/apple.png"; 


// При нажатии на какую-либо кнопку переключаем y++ или y--
document.addEventListener("keydown", setMoveDirection);

function setMoveDirection() {
    
 goUp = !goUp;
 
}


function draw() { // функция которая постоянно вызывает сама себя, в не заключены все основные действия
    
    
    ctx.drawImage(snake, snakeX, snakeY);

    ctx.drawImage(apple, appleX, appleY);


    if(snakeY > 500){
      snakeY = 0;
    }
    if(snakeY < 0 ){
        snakeY = 500;
    }
    if(snakeX > 500){
      snakeX = 0;
    }
    if(snakeX < 0 ){
        snakeX = 500;
    }
    if(goUp == true){
      snakeY++ ;   
    }
    else{
        snakeY--;
    };
    
    if(appleX == snakeX && appleY == snakeY){
        score++;
    }
    snakeX++;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20); // выведем счет

    

    requestAnimationFrame(draw); // Вызов функции постоянно
   }
   
   draw(); // Вызов функции из вне

