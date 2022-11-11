class tutorial extends Phaser.Scene
{
    constructor()
    {
        super("tutorial");
    }


    preload()
    {
        this.load.image("tutorial","/assets/PlayResized.png");
    }

    create()
    {
        this.add.text(400,500,"TUTORIAL");


        //Botão para carregar o Menu inicial
        let backbtn = this.add.image(400,200,"tutorial");
        backbtn.setInteractive();
        backbtn.on("pointerdown", () => this.scene.start("Menu"));
    }
}