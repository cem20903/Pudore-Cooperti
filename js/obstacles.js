function Obstacles(x,y,width,height,img,canvas){

  // left es X
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = img;
  this.canvas = canvas;
  this.imgObstacles = new Image();
  this.imgObstacles.src = "images/"+ img + ".png"
  
  this.initObstacles = function(){
      //solucionar tema THIS
    this.canvas.drawImage(this.imgObstacles,this.x,this.y,this.width,this.height) 
  
      }




}