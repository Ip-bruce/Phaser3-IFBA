class menu extends Phaser.Scene
{
    constructor(){
        super("Menu");
    }

    preload()
    {
        this.preload.image("play","/assets/PlayResized.png");
    }
    create()
    {
        this.add.image(400,300,"play");
    }
}