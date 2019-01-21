window.onload = function(){

  var htmlCanvas = document.querySelector("#board");
  var canvas = htmlCanvas.getContext("2d")
 
  var obstacle1 = new Obstacles(400,390,120,50,"obstacle1",canvas)
  var obstacle2 = new Obstacles(640,450,40,50,"wood",canvas)
  var obstacle3 = new Obstacles(780,400,50,100,"wood",canvas);

  var arrayObstacle = [obstacle1,obstacle2,obstacle3]
  
  var object1 = new Object(440,360,30,30,"coin",canvas)

  var loadBackground = new Background(canvas);
  
  var imgCharacter = new Image();
  imgCharacter.src = "images/character.png"


  
  setInterval(function () {

    clear()

    loadBackground.initBackground();
    canvas.drawImage(imgCharacter, character.x, character.y, character.width, character.height)
  
    obstacle1.initObstacles()
    object1.initObject()
    obstacle2.initObstacles()
    obstacle3.initObstacles()
    colision()
    //Se refresca y permite que exista movimiento
    //Cargamos cada XXX milisegundos





    //La function colission comprueba las colisiones.



  }, 1000/60)

  function clear(){
    canvas.clearRect(0,0,1400,600)
    
  }



 
  function colision(){
    // X left
    // Y top
    // Si el personaje no esta en la 450 y no esta en una plataforma

  
   
// if(character.x == 410 && character.y == 350){
  

// }

// Cae el primer obstaculo
// if(character.x > 410 && character.x < 440 && character.y == 450){
//  // console.log("Cae")
//   // var ints = setInterval(function(){
//   //   obstacle1.y++
   
//   // },100)
// }

if(
  character.x <  object1.x + object1.width &&
      object1.x  < character.x + character.width &&
      character.y < object1.y + object1.height &&
      object1.y < character.y + character.height
){
 // Coge la moneda  
  console.log("Colision Moneda")
}
 

    if(character.isPlataform == false){
      character.inter()
    }

    // Suelo
    if(character.y == 450){
      character.isPlataform = true
    }

    //Primer Obstaculo
  //  if(character.y == 350 && character.x > 355 && character.x < 500){
  //    character.isPlataform = true
  //  }

 


   //Para que se caiga por los bordes del primer objeto
   
  //  if(character.y == 350 && (character.x <= 350 || character.x > 500 ) ){
  //   character.isPlataform = false;
  //  }



  
// Primera plataforma
    // if(character.x <  obstacle1.x + obstacle1.width &&
    //   obstacle1.x  < character.x + character.width &&
    //   character.y < obstacle1.y + obstacle1.height &&
    //   obstacle1.y < character.y + character.height
    //   ){
       
    //     //alert(character.y)
    //     character.isPossibleX = false;
    //     //character.isPossibleX = false;
    //   } else{
    //     character.isPossibleX = true;
    //     //character.isPossibleX = true;
    //   }


// Segunda plataforma 

// Para que no atraviese el segundo objeto.

//Tercera plataforma 
if( (character.x + character.width) > obstacle3.x && character.x < obstacle3.x + obstacle3.width && character.y == 450){
  character.isPossibleX = false
} else {
  character.isPossibleX = true
}

// Esto funciona - Segunda plataforma
if(character.x + character.width > obstacle2.x  && character.x < obstacle2.x+obstacle2.width 
  && character.y == 450 ){
  character.isPossibleX = false;

} 

// Volver para atras 2º obstaculo
if(character.x > obstacle2.x + (obstacle2.width - 5)&&(character.x < obstacle2.x + (obstacle2.width + 5))  && character.y == 450){
 
 character.isPossibleReturn = false;

} else {
  character.isPossibleReturn = true;
} 

//Volver para atras 3º obstaculo
if(character.x > obstacle3.x + (obstacle3.width - 5)
&&(character.x < obstacle3.x + (obstacle3.width + 5)) 
&& character.y == 450){

  character.isPossibleReturn = false;

}


//  if(character.x > obstacle2.x){
//   alert(character.y)
//  }
   //Segundo Obstaculo
  //  if(character.y == 350 && character.x > 355 && character.x < 500){
  //   character.isPlataform = true
  // }

  // X left

  if(character.y == 450){
    character.isPlataform = true;
  } else {
    character.isPlataform = false;
  }
    

  arrayObstacle.forEach(function(obstacle){
    
    if( character.y + character.height < obstacle.y 
      && character.x + character.width > obstacle.x 
      && character.x < obstacle.width + obstacle.x  ){
        character.isPlataform = true
      }


  })
  
  // if( character.y + character.height < obstacle1.y 
  // //   && character.x + character.width > obstacle1.x 
  // //   && character.x < obstacle1.width + obstacle1.x  ){
  // //   character.isPlataform = true;
    
    
  // // } else  if( character.y + character.height == obstacle2.y 
  // //   && character.x + character.width > obstacle2.x 
  // //   && character.x < obstacle2.width + obstacle2.x ){
  // //   character.isPlataform = true;
    
  // // } else {
  // //   character.isPlataform = false;
  // // } 



 

  

  
      // Parametros de primer Obstaculo
   // if(character.left === 350 && character.top >= 345 && character.top <= 445 ){
      // Para que no atraviese la parte izquierda
     // character.isPossibleX = false;
  
   // } else {
   
// X left
// Y top

    //  character.isPossibleX = true
   // }

      
      // if(character.x >= obstacle1.colissionLeft && 
      //   character.left <= obstacle1.colissionRight && character.top == 345){
      //   isPlatform = true
        
          
      //   } else{
      //     isPlatform = false;
      //   }
      

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
    
      if(character.isPossibleReturn){
      character.x -= 10;
    }
//Pa izquierda
      break;
      case 39:
      if(character.isPossibleX){
        character.x += 10;
      }
     
//Pa derecha
      break;
      case 32:
      
      if(character.isPlataform == true){
      character.jump();
    }
    break;
      //37 Izd
      //39 Der
      //38 Arriba
    }
     
    
    })


}
