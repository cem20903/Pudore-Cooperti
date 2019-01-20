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

  top: 450,
  left: 50,
  width:50,
  height:50,
  isPossibleLeft: true,
  isPossibleJump: true,
  inter: function(){
    if(this.top != 450){ 
    character.top += 5 
     
  }
  },

  jump: function(){

    if(character.isPossibleJump){
      // Salto
            this.top -= 130;
            this.isPossibleJump = false
          }

    

  }


          }