window.onload = function(){

  var htmlCanvas = document.querySelector("#board");
  var canvas = htmlCanvas.getContext("2d")
  var imgCharacter = new Image();
  var obstacle1 = new Obstacles(400,390,100,50,"obstacle1",canvas,370,490,340)
  

var loadBackground = new Background(canvas);
loadBackground.initBackground();


var loadBackground = new Background(canvas);

  setInterval(function(){

    //Se refresca y permite que exista movimiento
    //Cargamos cada XXX milisegundos

   loadBackground.initBackground();
   imgCharacter.src = "images/character.png"
    imgCharacter.onload = function(){
      canvas.drawImage(imgCharacter,character.left,character.top,character.width,character.height)
        }
  
  obstacle1.initObstacles()
  colision()
  //La function colission comprueba las colisiones.

  

  },60)
  var isPlatform= false;
  function colision(){

    console.log(character.left)
  

    if(level.numLevel == 1){

    

   if(character.left === 350 && character.top >= 345 && character.top <= 445 ){
    character.isPossibleLeft = false;
   } else {
     character.isPossibleLeft = true
   }

      if(character.top != 450 && !isPlatform){
        character.isPossibleJump = false
       character.inter()
      } else{
        character.isPossibleJump = true
      }
  
      
      if(character.left >= obstacle1.colissionLeft && 
        character.left <= obstacle1.colissionRight && character.top == 345){
        isPlatform = true
          
        } else{
          isPlatform = false;
        }
      }


  
  
  

  }


  
  

  function checkColission(){

    //Position Original 
    
    


  //   if(level.numLevel == 1){
      
  //       if(character.left >= obstacle1.colissionLeft && 
  //         character.left <= obstacle1.colissionRight && character.top == 345){
  //           character.isPossibleJump = true

  //           //Hago clear Interval para que deje de caer.
  //           clearInterval(character.jumpInterval)
  //           character.top -= 5
  //       } 
  // }

  }
  


  var loadBackground = new Background(canvas);
  loadBackground.initBackground();




  /* var loadCharacter = new Character(canvas,50);
  loadCharacter.initCharacter(); */

  window.addEventListener("keydown",function(e){

    
    switch (e.keyCode){
      case 37:
      character.left -= 20;
//Pa izquierda
      break;
      case 39:
      if(character.isPossibleLeft){
        character.left += 20;
      }
     
//Pa derecha
      break;
      case 32:
      if(character.isPossibleJump === true){
      character.jump();
    }
    
    break;
      //37 Izd
      //39 Der
      //38 Arriba
    }
     
    
    })


}
