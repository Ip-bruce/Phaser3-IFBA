class menu extends Phaser.Scene
{
    constructor(){
        super("Menu");
    }

    preload()
    {
        this.load.image("play","/assets/PlayResized.png");
        this.load.image("credit","/assets/PlayResized.png");
        this.load.image("tutorial","/assets/PlayResized.png");
    }
    create()
    {
        this.add.text(355,250,"Matemate");
        //Criação do Butão de Play
       let playbtn = this.add.image(400,500,"play");
       playbtn.setInteractive();
       playbtn.on("pointerdown",() => this.scene.start("fase1"));
        
       let tutorialbtn = this.add.image(600,500,"tutorial");
        tutorialbtn.setInteractive();
        tutorialbtn.on("pointerdown", () => this.scene.start("tutorial"));
        
        let creditbtn = this.add.image(200,500,"credit");
        creditbtn.setInteractive();
        creditbtn.on("pointerdown", () => this.scene.start("credits"))

        cursors = this.input.keyboard.createCursorKeys();
    }
}