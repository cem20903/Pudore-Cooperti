function Obstacles(top,left,width,height,img,canvas,colissionLeft,colissionRight,colissionTop){

  this.top = top;
  this.left = left;
  this.width = width;
  this.height = height;
  this.img = img;
  this.colissionLeft = colissionLeft
  this.colissionRight = colissionRight
  this.colissionTop = colissionTop
  
  this.initObstacles = function(){
  
    var imgObstacles = new Image();
    imgObstacles.src = "images/"+ img + ".png"
    imgObstacles.onload = function(){
      //solucionar tema THIS
    canvas.drawImage(imgObstacles,top,left,width,height) 
  }   
      }




}