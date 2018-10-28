
    const canvas = document.getElementById('GAME');
  const context = canvas.getContext('2d');
  canvas.width = 1300;
  canvas.height = 800;

  const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
  const background = new Image();
  background.src= "https://c.pxhere.com/photos/11/57/background_graffiti_grunge_street_art_graffiti_wall_graffiti_art_artistic_painted-553958.jpg!d"
  

const police= new Image();
   police.src = "http://pluspng.com/img-png/policeman-png-hd-free-clip-art-police-officer-uniform-clipart-kid-2-800.png"
   

   const boy= new Image();
   boy.src ="http://clipart.coolclips.com/480/vectors/tf05156/CoolClips_vc007467.png"
const hero = {
		
     x: 0,
     y: 490,
     width: 190,
     height: 190,
     xDelta: 0,
     yDelta: 0,
     image:boy,
     draw: function(){
       context.drawImage(this.image, this.x, this.y ,this.width, this.height);
		},
		update: function() {

      if(this.x < 0 || this.x > canvas.width - this.width ){
                this.xDelta = this.xDelta * -1}
        if(this.y < 0 || this.y > canvas.height - this.height ){
              this.yDelta = this.yDelta * -1}
         
          this.x += this.xDelta;
           this.y += this.yDelta;  
    
      //         if(this.x < 0 || this.x > canvas.width - this.width){
      //           this.xDelta = this.xDelta * -1}
		    // if(this.y < 0 || this.y > canvas.height - this.height){
      //         this.yDelta = this.yDelta * -1}
         
      //     this.x += this.xDelta;
      //      this.y += this.yDelta;  
      } 
	};
  
     

     const policeman = function(countPoliceman, canvasWidth, canvasHeight) {
      const array = [];
    for(let i = 0; i < countPoliceman; i++){
    
          array[array.length] = {

            x: rand(canvasHeight - 40),
            y: rand(canvasWidth- 30),
            width: 200,
            height: 200,
            xDelta: 2, 
            yDelta: 2, 
            
            draw: function() {
              context.drawImage(police, this.x, this.y, this.width, this.height)
              
            },
            update: function() { 
           
    
        if(this.x < 0 || this.x > canvasWidth - this.width){
          this.xDelta *= -1;}
		if(this.y < 0 || this.y > canvasHeight - this.height){
          this.yDelta *= -1;}
            
            this.x += this.xDelta;
            this.y += this.yDelta;
            
       if (this.x < hero.x + hero.width &&
   			this.x + this.width > hero.x &&
   			this.y < hero.y + hero.height &&
   			this.height + this.y > hero.y){
         alert("GAME OVER");
      			}
   
      		}
        };
       
     }  

     return array;
};

	
  
  const createBoxes = policeman(rand(5),canvas.width,canvas.height);
  
  const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === rightKey){
        		hero.xDelta = 6;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === leftKey){
        		hero.xDelta =  -6;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === downKey){
        		hero.yDelta = 6;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === upKey){
        		hero.yDelta = -6;
        	}
        	if(hero.x + hero.width === canvas.width){
        		hero.xDelta = 0;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);

    const drawFinal = function(array){  

 for(let i = 0; i < array.length; i = i+1){     
          policeman(array[i].draw())       
            
        }         
  }; 

   const updateFinal =function(array1){
        for(let i = 0; i < array1.length; i++){
          policeman(array1[i].update());
          
            
        }          
      };

  
  const loop = function() { 
  	context.drawImage(background, 0, 0, canvas.width, canvas.height)    
    drawFinal(createBoxes);  
    updateFinal(createBoxes);
    hero.draw();
    hero.update();                            
    requestAnimationFrame(loop);       
  }         
          
  loop();
