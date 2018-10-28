
   
const canvas = document.getElementById('canvas');
const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};


canvas.height = 700;
canvas.width = 900;
const context = canvas.getContext('2d');


const colorarr = ["#5f7caa",'#517242', '#107375', "#a03909"]


const createBoxes = function(count, canvasWidth, canvasHeight) {
const array = [];
    for(let i = 0; i < count; i++){
        array[array.length] = {
            x: rand(canvasWidth - 25),
            y: rand(canvasHeight - 25),
            width: 25,
            height: 25,
            xDelta: rand(4),
            yDelta: rand(4),
            color: colorarr[rand(colorarr.length)-1],
            draw: function() {
                context.fillStyle = this.color;
                context.fillRect(this.x , this.y, this.width, this.height)},
            update: function() {
                if(this.x < 0 || this.x > canvasWidth - this.width){
                        this.xDelta *= -1; 

                }

                if(this.y < 0 || this.y > canvasHeight - this.height){
                        this.yDelta *= -1; 

                }

                this.x += this.xDelta;
                this.y += this.yDelta;
            }
        }
    }
return array;
};

const boxes = createBoxes(100, canvas.width, canvas.height);

const loop_update = function(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].update();
    }
};

const loop_draw = function(){
    context.fillStyle = "lightblue";
    context.fillRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].draw();
    }


};

const loop = function(){

    loop_update();
    loop_draw();

 requestAnimationFrame(loop);
}

loop();
     

  // GAME

