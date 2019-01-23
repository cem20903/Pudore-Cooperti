var game = {

  canvas: undefined,
  ctx: undefined,
  level: [],
  objects: [],
  character: undefined,
  background: [],
  fps: 60,
  actualLevel: 0,

  start: function () {
    this.canvas = document.getElementById("board");
    this.ctx = this.canvas.getContext("2d");

    this.character = new Character(this)
    this.createLevel()
    this.createBackground()
    this.repiteOften()
    this.createObjects()
  },

  createLevel: function () {

    var level = []

    level.push(new Obstacles(400, 390, 120, 50, "obstacle1", this.ctx)
      ,new Obstacles(640, 450, 40, 50, "wood", this.ctx),
      new Obstacles(680, 400, 50, 100, "wood", this.ctx),
      new Obstacles(730, 370, 50, 130, "wood", this.ctx),
      new Obstacles(770, 330, 50, 170, "wood", this.ctx),
      new Obstacles(820, 370, 50, 130, "wood", this.ctx),
      new Obstacles(870, 400, 50, 100, "wood", this.ctx),
      new Obstacles(920, 450, 40, 50, "wood", this.ctx),
      new Obstacles(1050, 390, 120, 50, "obstacle1", this.ctx)
     )
      

    this.level.push(level)
  },

  createObjects: function(){

    var objects = []
    objects.push(new Object(440,360,30,30,"coin",this.ctx))
    this.objects.push(objects)
    
  },

  createBackground: function(){

  var background = [];

  background.push(new Background(this.ctx))

  this.background.push(background)
},

 repiteOften: function(){
  setInterval(function(){

    console.log(this.character.isPlataform)

    var col = false
    var col2 = false

    this.background[this.actualLevel][0].draw()
   
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

    //  this.character.checkFloor()
  
     
 
     
   }.bind(this))

   this.character.checkMovement()
  

  }.bind(this), 1000/this.fps)

 }
}



