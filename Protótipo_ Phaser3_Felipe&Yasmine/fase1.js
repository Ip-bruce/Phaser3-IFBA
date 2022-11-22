class fase1 extends Phaser.Scene {
    constructor() {
      super("fase1");
    }
  
    preload()
    {
     // this.load.image("play","assets/")
     //this.load.image("menu","assets/menu.png");
     //this.load.image("play","assets/PLAY.png");
     //this.load.image("config","assets/CONFIG.png");
     //this.load.image("credit","assets/CREDIT.png");
  
    }
    
    create() 
    {
      this.add.text(400,300,"10 + 10");
      this.add.text(600,500,"20");
      this.add.text(200,500,"85");

      this.add.image(400,300,"menu");
  
     let playbtn = this.add.image(400,500,"play");
     playbtn.setInteractive();
     playbtn.on("pointerdown",() =>  this.scene.start("introduction"));
  
     let configbtn = this.add.image(150,500,"config");
     configbtn.setInteractive();
     configbtn.on("pointerdown",() =>  this.scene.start("Tutorial"));
  
     let creditbtn = this.add.image(650,500,"credit");
     creditbtn.setInteractive();
     creditbtn.on("pointerdown",() =>  this.scene.start("Credit"));
  
     //this.scene.start("playGame");
     cursors = this.input.keyboard.createCursorKeys();
   }
   
    
  }
  