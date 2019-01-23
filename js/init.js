window.onload = function(){

  game.start();

//   // var htmlCanvas = document.querySelector("#board");
//   // var canvas = htmlCanvas.getContext("2d")
 
//   var obstacle1 = new Obstacles(400,390,120,50,"obstacle1",canvas)
//   //Piramide
//   var obstacle2 = new Obstacles(640,450,40,50,"wood",canvas);
//   var obstacle3 = new Obstacles(680,400,50,100,"wood",canvas);
//   var obstacle4 = new Obstacles(730,370,50,130,"wood",canvas);
//   var obstacle5 = new Obstacles(770,330,50,170,"wood",canvas);
//   var obstacle6 = new Obstacles(820,370,50,130,"wood",canvas);
//   var obstacle7 = new Obstacles(870,400,50,100,"wood",canvas);
//   var obstacle8 = new Obstacles(920,450,40,50,"wood",canvas);
//   var obstacle9 = new Obstacles(1050,390,120,50,"obstacle1",canvas)
// //Fin piramide
// var level2Obs1 = new Obstacles(400,390,120,50,"obstacle1",canvas)

// // Nivel 2



//   var arrayObstacle = [obstacle1,obstacle2,obstacle3,
//     obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9]

//   var arrayObstacleLevel2 = [level2Obs1]
  
//   var object1 = new Object(440,360,30,30,"coin",canvas)

//   var loadBackground = new Background(canvas);
  
//   var imgCharacter = new Image();
//   imgCharacter.src = "images/character.png"

  
//   setInterval(function () {

//     clear()

// // //VELOCIDAD


//     if(character.velArray[0]==37){
//       character.x -= character.vel
//     }
    
//     if(character.velArray[0]==39){
//       if(character.isPossibleX) {
//         character.x += character.vel
//       }
     
//     }


//     if(character.x >= 1400){
//      level.numLevel++
//      character.x = 50;
//     }

//     loadBackground.initBackground();
//     canvas.drawImage(imgCharacter, character.x, character.y, character.width, character.height)
  
//     if(level.numLevel == 1){

//       arrayObstacle.forEach(function(obstacle){
//         obstacle.initObstacles()
//       })

//       arrayObstacle.forEach(function(obstacle){

 
//         if(/* Si el jugador esta por encima de la parte baja del muñeco */
//            character.y < obstacle.y + obstacle.height &&
//            character.y + character.height  > obstacle.y + 6 &&
//           character.x + character.width  > obstacle.x/* No cuadra, con obstacle.y funciona */ &&
//           obstacle.x + obstacle.width > character.x
//           ){
            
//              character.isPossibleX = false
//           } 
       
       
//        })
    
//     object1.initObject()
//     //if(character.x > 190 && character.x < 230)
//     //alert("Tramp")

//   }

//   if(level.numLevel == 2){
    
//   console.log("asdf")
//     arrayObstacleLevel2.forEach(function(obstacle){
//       obstacle.initObstacles()
//     })

//   }

//     colision()
//     // comprobar()


// }, 1000/60)

//   function clear(){
//     canvas.clearRect(0,0,1400,600)
    
//   }

 
//   function colision(){
  
// if(character.isPlataform == false){
//       character.inter()
//     }

//     // Suelo
//     if(character.y == 450){
//       character.isPlataform = true
//       character.isPossibleX = true
//     }

//   if(character.y == 450){
//     character.isPlataform = true;
//   } else {
//     character.isPlataform = false;
//   }
    
//   arrayObstacle.forEach(function(obstacle){
//     //Para poder ANDAR POR ENCIMA
//     if( character.y + character.height > obstacle.y 
//       && character.x + character.width > obstacle.x 
//       && character.x < obstacle.width + obstacle.x  ){

//         character.isPlataform = true
//       }
//   })

//   }
  
//   var loadBackground = new Background(canvas);
//   loadBackground.initBackground();

// window.addEventListener("keyup",function(e){

//   switch(e.keyCode){
//     case 37:
//    character.velArray.splice(0,1)
//     break;
//     case 39:
//     character.velArray.splice(0,1)
//     break;
//   }

// })

//   window.addEventListener("keydown",function(e){
//     switch (e.keyCode){
//       case 37:
//  // Pa atras   
//       if(character.isPossibleReturn){

//       character.x -= character.vel;
//       character.velArray[0] = e.keyCode
//       character.isPossibleX = true
//     }
// //Pa derecha
//       break;
//       case 39:
//       console.log(character.isPossibleX)
//       // if(character.isPossibleX){
//       //   character.x += character.vel;
//         character.velArray[0] = e.keyCode
  
   
//       //   console.log("Avanzo")
//       // }
     
// //Pa Saltar
//       break;
//       case 32:
//       character.isPossibleX = true
//       if(character.isPlataform == true){
//       character.jump();
//     }
//     break;
//     }
  
//     })
}
