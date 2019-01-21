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

var character = {

  y: 450,
  x: 50,
  width:50,
  height:50,
  isPlataform: true,
  isPossibleX: true,
  isPossibleReturn: true,
  inter: function(){
    if(this.isPlataform == false){ 
    
    
    this.y += 5 
    

  }
  },

  jump: function () {

    if (this.isPlataform) {
      // Salto
      
      this.y -= 200;
     
      this.isPlataform = false
    }
  }
              }