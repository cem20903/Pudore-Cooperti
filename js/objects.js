function Object(x,y,width,height,img,ctx){

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = img;
  this.ctx = ctx;
  this.imgObject = new Image();
  this.imgObject.src = "images/"+ img + ".png"



}

Object.prototype.draw = function(){

  this.ctx.drawImage(this.imgObject,this.x,this.y,this.width,this.height) 

}

