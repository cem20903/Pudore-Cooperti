function Obstacles(x,y,width,height,img,ctx){

  // left es X
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = img;
  this.ctx = ctx;
  this.imgObstacles = new Image();
  this.imgObstacles.src = "images/"+ img + ".png"
  




}

Obstacles.prototype.draw = function(){

  this.ctx.drawImage(this.imgObstacles,this.x,this.y,this.width,this.height) 

}