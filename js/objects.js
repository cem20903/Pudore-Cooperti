function Object(x,y,width,height,img,canvas){

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = img;
  this.canvas = canvas;
  this.imgObject = new Image();
  this.imgObject.src = "images/"+ img + ".png"
  
  this.initObject = function(){
      //solucionar tema THIS
    this.canvas.drawImage(this.imgObject,this.x,this.y,this.width,this.height) 
  
      }




}



