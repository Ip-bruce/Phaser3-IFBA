class tutorial extends Phaser.Scene
{
    constructor()
    {
        super("tutorial");
    }


    preload()
    {
        this.load.image("back","/assets/Backimg.webp");
    }

    create()
    {
        this.add.text(400,500,"TUTORIAL");


        //Botão para carregar o Menu inicial
        let backbtn = this.add.image(400,200,"back");
        backbtn.setInteractive();
        backbtn.on("pointerdown", () => this.scene.start("Menu"));
    }
}