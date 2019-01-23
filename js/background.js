function Background(ctx){

  this.ctx = ctx;
  this.imgBackground = new Image();
  this.imgBackground.src = "images/background.png"
}

Background.prototype.draw = function() {
  this.ctx.drawImage(this.imgBackground,0,0,1400,600) 
}

