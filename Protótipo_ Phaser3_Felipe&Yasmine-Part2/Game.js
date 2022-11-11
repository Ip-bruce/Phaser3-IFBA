//const { Phaser } = require("./phaser.min")

var config = {
     type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    


    },
   // scene: [Scene1,Scene2]
   scene: [fase1],
 //  scene: {
    //preload: preload,
   // create: create,
    //update: update
//}
    
};

var game = new Phaser.Game(config);


var player;
var circuitos;
var platformas;
var cursors;
var contagem;
var contagem2;
var ganhou;

function collectStar (player, star)
{
  star.disableBody(true, true);
  contagem += 1;
  contagem2 += 1;
  if(contagem == 12)
  { 

      player.disableBody(true,true);
      this.scene.start("fase2");
      
      
  }
  
  if(contagem2 == 23 && contagem2 == 23)
  {
    ganhou.setText('Ganhou!! Coletou todas as ' + contagem + ' peças!!');
    this.scene.start("fim");
  }

}
