function Background(canvas){

  this.canvas = canvas;
  var imgBackground = new Image();
  imgBackground.src = "images/background.png"
  
  this.initBackground = function(){
  this.canvas.drawImage(imgBackground,0,0,1400,600) 
    }
      }

