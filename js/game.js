var game = {

  canvas: undefined,
  ctx: undefined,
  level: [],
  objects: [],
  character: undefined,
  background: [],
  fps: 60,
  actualLevel: 0,
  traps: [],
  interruptor: true,
  score: 0,
  presentation: true,
  live: true,
  sword: true,
  message: undefined,
  gameOver: undefined,
  liveObjectsArray: [],
  lives: 5,
  puerta: false,

  start: function () {
    this.canvas = document.getElementById("board");
    this.ctx = this.canvas.getContext("2d");

    this.character = new Character(this)
    this.createLevel()
    this.createBackground()
    this.repiteOften()
    this.createObjects()
    this.livesObjects()
  },

  createLevel: function () {

 
    var level1 = []

    level1.push(new Obstacles(400, 390, 120, 50, "obstacle1", this.ctx)
      ,new Obstacles(640, 450, 40, 50, "wood", this.ctx),
      new Obstacles(680, 400, 50, 100, "wood", this.ctx),
      new Obstacles(730, 370, 50, 130, "wood", this.ctx),
      new Obstacles(770, 330, 50, 170, "wood", this.ctx),
      new Obstacles(820, 370, 50, 130, "wood", this.ctx),
      new Obstacles(870, 400, 50, 100, "wood", this.ctx),
      new Obstacles(920, 450, 40, 50, "wood", this.ctx),
      new Obstacles(1050, 390, 120, 50, "obstacle1", this.ctx)
     )
    
    this.level.push(level1)

    var level2 = []

    level2.push(new Obstacles(300, 370, 120, 50, "obstacle1", this.ctx),
    new Obstacles(550, 370, 120, 50, "obstacle1", this.ctx),
    new Obstacles(1150, 370, 120, 50, "obstacle1", this.ctx))

    this.level.push(level2)




  },

  createObjects: function(){

    var objectsLevel1 = []
    objectsLevel1.push(new Object(550,360,30,30,"coin",this.ctx),
    new Object(400,335,30,60,"badplayer",this.ctx),
    new Object(680,400,50,50,"lanza",this.ctx),
    new Object(770,330,50,50,"lanza",this.ctx),
    new Object(870,400,50,50,"lanza",this.ctx)   
    )

    this.objects.push(objectsLevel1)
  
    var objectsLevel2 = []


    objectsLevel2.push(
    new Object(440,360,30,30,"coin",this.ctx),
    new Object(100,470,30,30,"coin",this.ctx),
    new Object(150,470,30,30,"coin",this.ctx),
    new Object(200,470,30,30,"coin",this.ctx),
    new Object(250,470,30,30,"coin",this.ctx),
    new Object(300,470,30,30,"coin",this.ctx),
    new Object(350,470,30,30,"coin",this.ctx),
    new Object(400,340,30,30,"coin",this.ctx),
    new Object(600,340,30,30,"coin",this.ctx),
    new Object(630,340,30,30,"coin",this.ctx)
    )

    this.objects.push(objectsLevel2)

    
  },

  livesObjects: function(){

    this.liveObjectsArray.push(
     new Object(150,0,30,60,"badplayer",this.ctx),
    new Object(180,0,30,60,"badplayer",this.ctx),
    new Object(210,0,30,60,"badplayer",this.ctx),
    new Object(240,0,30,60,"badplayer",this.ctx),
    new Object(270,0,30,60,"badplayer",this.ctx)
    )

  },

  createBackground: function(){

  var background = [];

  background.push(new Background(this.ctx))

  this.background.push(background)
},

  traps: function(){
   //Trampilla
   var trap1 = new Traps(this.character.x < 190 && 
    this.character.x > 140 && this.character.y >= 450,1,this)
    //Moneda trampa
    var trap2 = new Traps(this.character.x + this.character.width > this.objects[0][0].x &&
      this.objects[0][0].x + this.objects[0][0].width > this.character.x &&
      this.character.y + this.character.height > this.objects[0][0].y &&
      this.objects[0][0].y + this.objects[0][0].height > this.character.y,2,this)

      //Debajo del primer obstaculo
    var trap3 = new Traps(this.character.y == 450 &&
       this.character.x > 414 && this.character.x < 450,3,this)

    //Pincho   
       var trap4 = new Traps(this.character.x > 638 && this.character.x < 680 && this.character.y == 355,4,this)
       var trap5 = new Traps(this.character.x > 730 && this.character.x < 770 && this.character.y == 285,6,this)
       var trap7 = new Traps(this.character.x > 870 && this.character.x < 900 && this.character.y == 355,7,this)

    if(this.actualLevel == 0){
    trap1.trapActive()
    trap2.trapActive()
    trap3.trapActive()
    trap4.trapActive()
    trap5.trapActive()
    trap7.trapActive()
}
  if(this.actualLevel == 1){
//Monedas 2º nivel
    this.objects[1].forEach(function(coin,index){

      var coins = new Traps(this.character.x + this.character.width > coin.x &&
        coin.x + coin.width > this.character.x &&
        this.character.y + this.character.height > coin.y &&
        coin.y + coin.height > this.character.y,5,this,index)  
        coins.trapActive()
     }.bind(this))

   // trap5.trapActive()
    

  }

  },

 repiteOften: function(){
  setInterval(function(){

   
  
 

    

    if(this.live === false){
      // GAME OVER
setTimeout(function(){
        this.gameOver = new Image();
        this.gameOver.src = "images/gameover.jpg"
        this.ctx.drawImage(this.gameOver,0,0,1400,600)
        this.ctx.fillText(this.message ,500,450)
        
      }.bind(this),500)
      
       
       } else {

        

    this.traps()

    if(this.character.x > 1400 && this.actualLevel == 0){
      
      this.actualLevel++
      this.character.x = 50
    }

  

    if(this.actualLevel == 1 && this.character.x > 380 && this.character.x < 1290 && this.character.y == 450){   
      this.live = false
      this.message = "El fuego purificador hace presencia en ti"
     
    }
  

if(this.character.x > 1290 && this.actualLevel == 1  && this.score != 6){
  console.log("Jums reikia šešių monetų")

}

if(this.character.x > 1290 && this.actualLevel == 1 && this.score == 6){
  console.log("La puerta esta abierta, ¿Donde estara?")
  this.puerta = true
}
if(this.character.x > 1400 && this.actualLevel == 1){
  this.live = false;
  
  this.message = "Va a ser que por aqui no era";

}
if(this.character.x < 0 && this.actualLevel == 1 && this.score == 6 && this.puerta){
  
  this.live = false
  this.message = "Te lo has pasado, como haras con el IronHack"
}

    if(this.level[1][1].x <= 950 && this.interruptor && this.actualLevel == 1){
      this.level[1][1].x++ 
    } 
    
    if(this.level[1][1].x == 950){
      console.log("Pongo en false")
      this.interruptor = false
    }
    
    if(this.actualLevel == 1 && this.level[1][1].x >= 550 && this.interruptor == false){
      this.level[1][1].x--
    }
  
if(this.level[1][1].x === 550 ){
  this.interruptor = true
}

    var col = false
    var col2 = false

    this.background[0][0].draw()
    this.ctx.font = "30px Arial";
    this.ctx.fillText("Coins: " + this.score, 10, 50);
     
    this.character.inter()
    
    this.objects[this.actualLevel].forEach(function(objects){
     objects.draw()
   })
  
   this.level[this.actualLevel].forEach(function(obstacle){
     obstacle.draw()



      
     if(this.character.checkPlattform(obstacle)) {
       this.character.isPlataform = true;
       col = true
     } else if (col === false) {
       this.character.isPlataform = false
     }
    
     if (this.character.checkPlattformX(obstacle)) {
       this.character.isPossibleX = false
       col2 = true
     } else if (col === false ) {
      this.character.isPossibleX = true
     }

    if(this.presentation){
      this.background[0][0].draw()
      this.ctx.font = "60px Comic Sans";
      this.ctx.fillText("Bienvenido al, posiblemente, el mejor juego del mundo", 20, 300);
      setTimeout(function(){
        this.presentation = false
      }.bind(this),3000)
    }

    if(this.actualLevel == 1){
   
  this.imgFire = new Image();
    this.imgFire.src = "images/fire.png"
    this.ctx.drawImage(this.imgFire,400,435,900,60) 
  
}

this.liveObjectsArray.forEach(function(object){
  object.draw()

})
 
     
   }.bind(this))

   this.character.checkMovement()
  
  }
  }.bind(this), 1000/this.fps)

 }
}



