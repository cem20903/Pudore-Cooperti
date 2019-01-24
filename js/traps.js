function Traps(condition,numTrap,contextGame,numCoin){

this.numTrap = numTrap
this.condition = condition
this.game = contextGame
this.numCoin = numCoin
this.hahaSound = new Audio("sounds/haha.wav")

}

Traps.prototype.trapActive = function(){

  if(this.condition){
    switch(this.numTrap){
      case 1:
      this.game.character.y += 15
      this.game.character.isPlataform = false;
      setTimeout(function(){
        this.game.live = false;
      }.bind(this),500)
      this.game.message = "Mira por donde andas, torpe!"
      this.lives--
      this.hahaSound.play()
      break;
      case 2:
      this.game.objects[0].splice(0,1)
      this.game.message = "No cojas dinero que no es tuyo, perro"
      this.lives--
      this.game.live = false
      this.hahaSound.play()
      break;
      case 3:
     this.game.level[0][0].y = 450
      setTimeout(function(){
        this.game.live = false;
        this.game.message = "Ahora eres un din A4"
        this.lives--
        this.hahaSound.play()
      }.bind(this),400)
      break;
      case 4:
      
      this.game.objects[0][2].y -= 40
      this.game.sword = false
      this.game.live = false
      this.hahaSound.play()
      this.lives--
      this.game.message = "Ahora eres un colador"
    
      break;
      case 5:
      this.game.score++
      this.game.objects[1].splice(this.numCoin,1)
      var coinSound = new Audio("sounds/coin.wav")
      coinSound.play()
      break;
      case 6:
      console.log(this.game.character.y)

      this.game.objects[0][3].y -= 40
      this.game.sword = false
      this.game.live = false
      this.hahaSound.play()
      this.game.message = "Ahora eres un colador"
      this.lives--

        break;
        case 7:
        console.log(this.game.character.y)
      
       
      this.game.objects[0][4].y -= 40
      this.game.sword = false
      this.hahaSound.play()
      this.game.live = false
      this.game.message = "Ahora eres un colador"
      break;
      
    }
  }

  
    
}


