function Message(game, sentence){

this.game = game
this.sentence = sentence

}

Message.prototype.end = function(){

  game.background[0][0].draw()
      
  game.ctx.font = "30px Arial";
  game.ctx.fillText(this.sentence, 300, 300);


}