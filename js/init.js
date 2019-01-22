window.onload = function(){

  var htmlCanvas = document.querySelector("#board");
  var canvas = htmlCanvas.getContext("2d")
 
  var obstacle1 = new Obstacles(400,390,120,50,"obstacle1",canvas)
  //Piramide
  var obstacle2 = new Obstacles(640,450,40,50,"wood",canvas);
  var obstacle3 = new Obstacles(680,400,50,100,"wood",canvas);
  var obstacle4 = new Obstacles(730,370,50,130,"wood",canvas);
  var obstacle5 = new Obstacles(770,330,50,170,"wood",canvas);
  var obstacle6 = new Obstacles(820,370,50,130,"wood",canvas);
  var obstacle7 = new Obstacles(870,400,50,100,"wood",canvas);
  var obstacle8 = new Obstacles(920,450,40,50,"wood",canvas);
  var obstacle9 = new Obstacles(1050,390,120,50,"obstacle1",canvas)

//Fin piramide

  var arrayObstacle = [obstacle1,obstacle2,obstacle3,
    obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9]
  
  var object1 = new Object(440,360,30,30,"coin",canvas)

  var loadBackground = new Background(canvas);
  
  var imgCharacter = new Image();
  imgCharacter.src = "images/character.png"

  var interruptor = true;

  
  setInterval(function () {

    clear()

    if(character.x >= 1400){
     level.numLevel++
     character.x = 50;
    }

    loadBackground.initBackground();
    canvas.drawImage(imgCharacter, character.x, character.y, character.width, character.height)
  
    if(level.numLevel == 1){
    obstacle1.initObstacles()
    object1.initObject()
    obstacle2.initObstacles()
    obstacle3.initObstacles()
    obstacle4.initObstacles()
    obstacle5.initObstacles()
    obstacle6.initObstacles()
    obstacle7.initObstacles()
    obstacle8.initObstacles()
    obstacle9.initObstacles()
    
    //if(character.x > 190 && character.x < 230)
    //alert("Tramp")

  }

  if(level.numLevel == 2){
    
  }

    colision()
    //Se refresca y permite que exista movimiento
    //Cargamos cada XXX milisegundos
    
// if( (obstacle4.x >= 140 && obstacle4.x <= 200) && interruptor){
//   obstacle4.x++
// } else{
//   interruptor = false
// }
// if(interruptor == false && obstacle4.x <= 201 && obstacle4.x >140 ){
//   obstacle4.x--
// } else {
//   interruptor = true;
// }





    //La function colission comprueba las colisiones.
comprobar()


}, 1000/60)

  function clear(){
    canvas.clearRect(0,0,1400,600)
    
  }


  function comprobar(){
   // DA TRUE cuando esta en el mismo eje X console.log(character.x + character.width +3 > obstacle1.x)

   //Funciona con el primer obstaculo
   if(/* Si el jugador esta por encima de la parte baja del muñeco */
     character.y < obstacle3.y + obstacle3.height &&
     character.y + character.height /*-10*/ > obstacle3.y &&
    character.x + character.width > obstacle3.y &&
    obstacle3.x + obstacle3.width > character.x
    ){
     console.log("sss")
     character.isPossibleX = false
   } else {
     character.isPossibleX = true
   }



  }
 
  function colision(){

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

 

 





//Tercera plataforma 
// if( (character.x + character.width) > obstacle3.x && character.x < obstacle3.x + obstacle3.width && character.y == 450){
//   character.isPossibleX = false
// } else {
//   character.isPossibleX = true
// }


arrayObstacle.forEach(function(obstacle){
  
  
//   if(character.y < obstacle.y + obstacle.height &&
//   character.y + character.height  > obstacle.y &&
//  character.x + character.width > obstacle.y &&
//  obstacle.x + obstacle.width > character.x){
//    console.log("asdf")
//  }

})

// Esto funciona - Segunda plataforma


// Volver para atras 2º obstaculo
// if(character.x > obstacle2.x + (obstacle2.width - 5)&&(character.x < obstacle2.x + (obstacle2.width + 5))  && character.y == 450){
 
//  character.isPossibleReturn = false;

// } else {
//   character.isPossibleReturn = true;
// } 

//Volver para atras 3º obstaculo
// if(character.x > obstacle3.x + (obstacle3.width - 5)
// &&(character.x < obstacle3.x + (obstacle3.width + 5)) 
// && character.y == 450){

//   character.isPossibleReturn = false;

// }

  if(character.y == 450){
    character.isPlataform = true;
  } else {
    character.isPlataform = false;
  }
    

  arrayObstacle.forEach(function(obstacle){
    

    //Para poder ANDAR POR ENCIMA
    if( character.y + character.height > obstacle.y 
      && character.x + character.width > obstacle.x 
      && character.x < obstacle.width + obstacle.x  ){
        character.isPlataform = true
      }
  })

  }


  

  
  var loadBackground = new Background(canvas);
  loadBackground.initBackground();

  /* var loadCharacter = new Character(canvas,50);
  loadCharacter.initCharacter(); */

  window.addEventListener("keydown",function(e){

    comprobar();
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
