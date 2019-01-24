/* function Character(canvas,left){

  this.canvas = canvas;
  this.left = left;

 this.movLeft = function(){
   this.left += 20;
 } 

this.initCharacter = function(){
  var imgCharacter = new Image();
  imgCharacter.src = "images/character.png"
  imgCharacter.onload = function(){
    canvas.drawImage(imgCharacter,left,450,50,100)
    }
     }
} */
function Character(game) {

  this.game = game,
  this.x = 50;
  this.y = 450;
  this.width = 50;
  this.height = 50;
  this.isPlataform = true;
  this.isPossibleX = true;
  this.isPossibleReturn = true;
  this.velArray = [];
  this.vel = 4;
  this.imgCharacter = new Image();
  this.imgCharacter.src = "images/badplayer.png"
  this.setListener()

}

Character.prototype.draw = function () {
  this.game.ctx.drawImage(this.imgCharacter, this.x, this.y, this.width, this.height)
}

Character.prototype.checkFloor = function () {

  // if (this.y == 450) {
  //   this.isPlataform = true
  //   this.isPossibleX = true
  // }

  // if (this.y == 450) {
  //   this.isPlataform = true;
  // } else {
  //   this.isPlataform = false;
  // }
}

Character.prototype.inter = function () {

  if(this.y >= 450) {
    this.isPlataform = true
  } else {
    if (!this.isPlataform) {
      this.y += 5
    }
  }



this.draw()

  // if(this.y === 450){
  //   this.isPlataform = true
  //     }




}

Character.prototype.jump = function () {
  
    // Salto
    this.y -= 200;

  
}

Character.prototype.checkPlattform = function (obstacle) {

  if( this.y + this.height > obstacle.y 
    && this.x + this.width > obstacle.x 
    && this.x < obstacle.width + obstacle.x ){
      return true
    } else {
      return false
    }



}

Character.prototype.checkMovement = function () {
  if(this.velArray[0]==37){
    this.x -= this.vel
  }
  
  if(this.velArray[0]==39){
    if(this.isPossibleX) {
      this.x += this.vel
    }
   
  }
}

Character.prototype.checkPlattformX = function (obstacle) {
  if(/* Si el jugador esta por encima de la parte baja del muñeco */
    this.y < obstacle.y + obstacle.height &&
    this.y + this.height  > obstacle.y + 6 &&
   this.x + this.width > obstacle.x/* No cuadra, con obstacle.y funciona */ &&
   obstacle.x + obstacle.width > this.x
   ){
      return true
   } else {
     return false
   }
}

Character.prototype.setListener = function () {


  document.onkeydown = function (e) {

    switch (e.keyCode) {
      case 37:
        // Pa atras   
        if (this.isPossibleReturn) {
          this.x -= this.vel;
          this.velArray.push(e.keyCode)
          this.isPossibleX = true
        }
        //Pa derecha
        break;
      case 39:
        if (this.isPossibleX) {
          this.x += this.vel;
          this.velArray.push(e.keyCode)
        }

        //Pa Saltar
        break;
      case 32:
        this.isPossibleX = true
      
        if (this.isPlataform || this.y === 450) {
          this.jump();
        }
      

        break;
    }
  }.bind(this)

  document.onkeyup = function (e) {

 

    switch (e.keyCode) {
      case 37:
        this.velArray = []
        break;
      case 39:
        this.velArray = []
        break;
      case 32:
        this.isPlataform = false
    }
  }.bind(this)

  this.game.canvas.onclick = function(){
if(this.game.lives <= 1){

  this.game.liveObjectsArray.splice(0,1)
  this.game.message = "FIN DEL JUEGO, CASI CASI PERO NO"
} else {
    this.game.character.x = 50;
    this.game.character.y = 450;
  
    this.game.level = []
    this.game.createLevel();
    this.game.objects = []
    this.game.createObjects();
    this.game.score = 0;
    this.game.live = true;
    this.game.liveObjectsArray.splice(0,1)
    this.game.lives--
  }
      
    
  }.bind(this)
}



// var character = {

//   y: 450,
//   x: 50,
//   width:50,
//   height:50,
//   isPlataform: true,
//   isPossibleX: true,
//   isPossibleReturn: true,
//   velArray: [],
//   vel: 4,
//   inter: function(){
//     if(this.isPlataform == false){ 

//     this.y += 5
//   }
//   },

//   jump: function () {

//     if (this.isPlataform) {
//       // Salto
//       this.y -= 200;
//     }
//   }
//               }