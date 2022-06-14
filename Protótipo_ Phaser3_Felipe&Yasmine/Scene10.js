class Scene10 extends Phaser.Scene{

    constructor()
    {
        super("fim");
    }


    preload()
    {
        this.load.image("fim","assets/fim.jpg");
    }

    create()
    {
        this.add.image(250,400,"fim");
    }


}