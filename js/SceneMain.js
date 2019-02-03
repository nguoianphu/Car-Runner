class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
    	this.load.image("road", "images/road.jpg");
    	this.load.image("cars", "images/cars.png", {frameWidth: 60, frameHeight: 126});
    	this.load.image("line", "images/line.png");
    }
    create() {
        //define our objects
        var road = new Road({scene: this});
        road.x = game.config.width / 2;
        road.makeLines();
    }
    update() {}
}