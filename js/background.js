function Background(canvas){

  this.canvas = canvas;
  
  this.initBackground = function(){

  
  var imgBackground = new Image();
  imgBackground.src = "images/background.png"
  imgBackground.onload = function(){
  canvas.drawImage(imgBackground,0,0,1400,600) 
  }   
    }
      }

