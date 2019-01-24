function Background(ctx){

  this.ctx = ctx;
  this.imgBackground = new Image();
  this.imgBackground.src = "images/background.png"
  this.imgFloor = new Image();
    this.imgFloor.src = "images/floor.png"

  
}

Background.prototype.draw = function() {

  this.ctx.drawImage(this.imgBackground,0,0,1400,500) 
  this.ctx.drawImage(this.imgFloor,0,490,1400,110) 

  
}

