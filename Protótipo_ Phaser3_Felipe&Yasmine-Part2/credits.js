class credits extends Phaser.Scene
{
    constructor()
    {
        super("credits");
    }


    preload()
    {
        this.load.image("credit","/assets/PlayResized.png");
    }

    create()
    {
        this.add.text(400,500,"Creditos");

        //Botão para voltar ao menu inicial
        let backbtn = this.add.image(400,200,"credit");
        backbtn.setInteractive();
        backbtn.on("pointerdown",() => this.scene.start("Menu"));
    }
}